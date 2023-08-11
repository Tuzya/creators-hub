// AccountTypeOption.tsx
import React from 'react';

type AccountTypeOptionProps = {
  accountType: 'personal' | 'company';
  handlePersonalClick: () => void;
  handleCompanyClick: () => void;
};

const AccountTypeOption: React.FC<AccountTypeOptionProps> = ({
  accountType,
  handlePersonalClick,
  handleCompanyClick,
}) => (
  <>
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
  </>
);

export default AccountTypeOption;
