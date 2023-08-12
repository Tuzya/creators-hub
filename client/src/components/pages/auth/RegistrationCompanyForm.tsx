import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpCompanyThunk } from '../../../redux/slices/company/companyThunks';

type RegistrationPersonalFormProps = {
  handleSignupClick: () => void;
};
export default function RegistrationCompanyForm({
  handleSignupClick,
}: RegistrationPersonalFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleRegistrationCompany = (formData: Record<string, any>) => {
    void dispatch(signUpCompanyThunk(formData));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    handleRegistrationCompany(formDataObject);
  };

  return (
    <form id="registration-company-form" onSubmit={handleSubmit}>
      <input type="name" name="name" placeholder="Company" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="repass" placeholder="Repeat password" />
      <button type="submit" className="login-btn">
        Sign Up
      </button>
    </form>
  );
}
