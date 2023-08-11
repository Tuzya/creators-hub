import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpUserThunk } from '../../../redux/slices/user/userThunks';

type RegistrationPersonalFormProps = {
  handleSignupClick: () => void;
};

export default function RegistrationPersonalForm({
  handleSignupClick,
}: RegistrationPersonalFormProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const handleRegistrationPersonal = (formData: Record<string, any>) => {
    void dispatch(signUpUserThunk(formData));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());

    handleRegistrationPersonal(formDataObject);
  };

  return (
    <form id="registration-personal-form" onSubmit={handleSubmit}>
      <input type="name" name="username" placeholder="Name" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" />
      <input type="password" name="repass" placeholder="Repeat password" />
      <button
        type="button"
        className="password-toggle-btn"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
      <button type="submit" className="login-btn">
        Sign Up
      </button>
    </form>
  );
}
