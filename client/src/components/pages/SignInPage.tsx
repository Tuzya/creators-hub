import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { signUpUserThunk } from '../../redux/slices/user/userThunks';
import { signUpCompanyThunk } from '../../redux/slices/company/companyThunks';

type RegistrationPersonalFormProps = {
  handleSignupClick: () => void;
};

function RegistrationPersonalForm({
  handleSignupClick,
}: RegistrationPersonalFormProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const handleRegistrationPersonal = (formData: Record<string, any>) => {
    dispatch(signUpUserThunk(formData));
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

function RegistrationCompanyForm({
  handleSignupClick,
}: RegistrationPersonalFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleRegistrationCompany = (formData: Record<string, any>) => {
    dispatch(signUpCompanyThunk(formData));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    handleRegistrationCompany(formDataObject);
  };

  return (
    <form id="registration-company-form" onSubmit={handleSubmit}>
      <input type="company" name="company" placeholder="Company" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="repass" placeholder="Repeat password" />
      <button type="submit" className="login-btn">
        Sign Up
      </button>
    </form>
  );
}

export default function SignInPage(): JSX.Element {
  const [formType, setFormType] = useState('login');
  const [accountType, setAccountType] = useState('personal');

  const handleNewUserClick = (): void => {
    if (accountType === 'personal') {
      setFormType('registrationPersonal');
    } else if (accountType === 'company') {
      setFormType('registrationCompany');
    }
  };

  const handleSignupClick = (): void => setFormType('login');
  const handleFPassClick = (): void => setFormType('fpass');

  const handlePersonalClick = (): void => setAccountType('personal');
  const handleCompanyClick = (): void => setAccountType('company');

  const isRegistrationForm =
    formType === 'registrationPersonal' || formType === 'registrationCompany';

  return (
    <div id="particles-js">
      <div className="mobile-screen">
        <div className="header">
          <h1>
            {isRegistrationForm
              ? `Registration ${accountType === 'personal' ? 'Personal' : 'Company'}`
              : formType === 'login'
              ? 'Log in'
              : 'Forgotten password'}
          </h1>
        </div>
        <div className="account-type-options">
          <div
            className={`account-type-option ${accountType === 'personal' ? 'active' : ''}`}
            style={{ margin: '10px', padding: '10px' }}
            onClick={handlePersonalClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlePersonalClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            Personal
          </div>
          <div
            className={`account-type-option ${accountType === 'company' ? 'active' : ''}`}
            style={{ margin: '10px', padding: '10px' }}
            onClick={handleCompanyClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCompanyClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            Company
          </div>
        </div>
        <div className="logo" />

        {isRegistrationForm &&
          (accountType === 'personal' ? (
            <RegistrationPersonalForm handleSignupClick={handleSignupClick} />
          ) : accountType === 'company' ? (
            <RegistrationCompanyForm handleSignupClick={handleSignupClick} />
          ) : null)}

        {formType === 'login' && !isRegistrationForm && (
          <form id="login-form">
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="pass" placeholder="Password" />
            <button
              type="button"
              className="login-btn"
              onClick={() => {
                // Your login logic here
              }}
            >
              Log in
            </button>
          </form>
        )}

        {formType === 'fpass' && !isRegistrationForm && (
          <form id="fpass-form">
            <input type="text" name="forgotten" placeholder="E-mail or phone number" />
            <button type="button" className="login-btn" onClick={handleSignupClick}>
              Get Password
            </button>
          </form>
        )}

        <div className="other-options">
          <button type="button" className="option" id="newUser" onClick={handleNewUserClick}>
            <p className="option-text">Registration</p>
          </button>
          <button type="button" className="option" id="fPass" onClick={handleFPassClick}>
            <p className="option-text">Forgotten password</p>
          </button>
        </div>
      </div>
    </div>
  );
}
