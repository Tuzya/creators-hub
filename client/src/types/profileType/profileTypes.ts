export type YourProfileType = {
  id: number;
  username: string;
};

export type EditProfileType = {
  city: string;
  birthDate: string;
  phone: string;
  about: string;
  companies: string;
  sex: string;
  photo: string;
  user_id: number;
};
export type PersonInfoType = Omit<EditProfileType, 'user_id'>;

export type SearchParamsProfile = {
  query: string;
  filterBy: string;
};