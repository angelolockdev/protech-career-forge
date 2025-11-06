-- Create profiles table for candidates
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  email text,
  phone text,
  skills text[],
  experience_years integer,
  education text,
  cv_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create companies table
CREATE TABLE public.companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text,
  industry text,
  size text,
  website text,
  logo_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on companies
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- Policies for companies
CREATE POLICY "Anyone can view companies"
  ON public.companies FOR SELECT
  USING (true);

CREATE POLICY "Company owners can update their company"
  ON public.companies FOR UPDATE
  USING (auth.uid() = owner_id);

CREATE POLICY "Authenticated users can create companies"
  ON public.companies FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Company owners can delete their company"
  ON public.companies FOR DELETE
  USING (auth.uid() = owner_id);

-- Create job_offers table
CREATE TABLE public.job_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  required_skills text[],
  experience_required integer,
  location text,
  salary_range text,
  contract_type text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on job_offers
ALTER TABLE public.job_offers ENABLE ROW LEVEL SECURITY;

-- Policies for job_offers
CREATE POLICY "Anyone can view active job offers"
  ON public.job_offers FOR SELECT
  USING (status = 'active' OR EXISTS (
    SELECT 1 FROM public.companies
    WHERE companies.id = job_offers.company_id
    AND companies.owner_id = auth.uid()
  ));

CREATE POLICY "Company owners can manage their job offers"
  ON public.job_offers FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.companies
    WHERE companies.id = job_offers.company_id
    AND companies.owner_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.companies
    WHERE companies.id = job_offers.company_id
    AND companies.owner_id = auth.uid()
  ));

-- Create job_applications table
CREATE TABLE public.job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_offer_id uuid REFERENCES public.job_offers(id) ON DELETE CASCADE NOT NULL,
  candidate_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  match_score integer CHECK (match_score >= 0 AND match_score <= 100),
  cover_letter text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(job_offer_id, candidate_id)
);

-- Enable RLS on job_applications
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Policies for job_applications
CREATE POLICY "Candidates can view their own applications"
  ON public.job_applications FOR SELECT
  USING (auth.uid() = candidate_id);

CREATE POLICY "Company owners can view applications for their jobs"
  ON public.job_applications FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.job_offers jo
    JOIN public.companies c ON c.id = jo.company_id
    WHERE jo.id = job_applications.job_offer_id
    AND c.owner_id = auth.uid()
  ));

CREATE POLICY "Candidates can create their own applications"
  ON public.job_applications FOR INSERT
  WITH CHECK (auth.uid() = candidate_id);

CREATE POLICY "Company owners can update application status"
  ON public.job_applications FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.job_offers jo
    JOIN public.companies c ON c.id = jo.company_id
    WHERE jo.id = job_applications.job_offer_id
    AND c.owner_id = auth.uid()
  ));

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', '')
  );
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON public.companies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_job_offers_updated_at
  BEFORE UPDATE ON public.job_offers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON public.job_applications
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();