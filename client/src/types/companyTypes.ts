// companyTypes.ts
export type CompanyModelType = {
  id: number;
  name: string;
  email: string;
};

export type CompanySignUpFormType = Omit<CompanyModelType, 'id'> & { password: string };
export type CompanyLoginFormType = Omit<CompanySignUpFormType, 'name'>;

export type CompanyType =
  | (CompanyModelType & { status: 'logged'; whoAuth: 'Company' })
  | { status: 'loading'; whoAuth: 'Company' }
  | { status: 'guest'; whoAuth: 'Guest' };
