export type UserModelType = {
  id: number;
  username: string;
  email: string;
  company_id: number;
};

export type UserSignUpFormType = Omit<UserModelType, 'id' | 'company_id'> & { password: string };
export type UserLoginFormType = Omit<UserSignUpFormType, 'username'>;

export type UserType =
  | (UserModelType & { status: 'logged'; whoAuth: 'User' })
  | { status: 'loading'; whoAuth: 'User' }
  | { status: 'guest'; whoAuth: 'Guest' };
