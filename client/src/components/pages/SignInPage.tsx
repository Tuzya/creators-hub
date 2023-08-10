import React, { useState } from 'react';

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

  let formTitle = '';
  if (formType === 'login') {
    formTitle = 'Log in';
  } else if (formType === 'registrationCompany') {
    formTitle = 'Registration Company';
  } else if (formType === 'registrationPersonal') {
    formTitle = 'Registration Personal';
  } else {
    formTitle = 'Forgotten password';
  }

  return (
    <div className="mobile-screen">
      <div className="header">
        <h1>{formTitle}</h1>
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

      {formType === 'registrationPersonal' && (
        <form id="registration-personal-form">
          <input type="name" name="name" placeholder="Name" />
          <input type="surname" name="surname" placeholder="Surname" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="repass" placeholder="Repeat password" />
          <a href="/" className="login-btn" onClick={handleSignupClick}>
            Sign Up
          </a>
        </form>
      )}

      {formType === 'registrationCompany' && (
        <form id="registration-company-form">
          <input type="copmany" name="copmany" placeholder="Copmany" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="repass" placeholder="Repeat password" />
          <a href="/" className="login-btn" onClick={handleSignupClick}>
            Sign Up
          </a>
        </form>
      )}

      {formType === 'login' && (
        <form id="login-form">
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="pass" placeholder="Password" />
          <a href="/" className="login-btn">
            Log in
          </a>
        </form>
      )}

      {formType === 'fpass' && (
        <form id="fpass-form">
          <input type="text" name="forgotten" placeholder="E-mail or phone number" />
          <a href="/" className="login-btn" onClick={handleSignupClick}>
            Get Password
          </a>
        </form>
      )}

      <div className="other-options">
        <button type="button" className="option" id="newUser" onClick={handleNewUserClick}>
          <p className="option-text">Regestration</p>
        </button>
        <button type="button" className="option" id="fPass" onClick={handleFPassClick}>
          <p className="option-text">Forgotten password</p>
        </button>
      </div>
    </div>
  );
}
