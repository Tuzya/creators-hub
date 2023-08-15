import React, { useEffect } from 'react';
import EditPersonInfoForm from '../../ui/editPersonInfo/EditPersonInfoForm';
import { editProfileThunk } from '../../../redux/slices/profiles/profileThunk';
import { useAppDispatch } from '../../../redux/hooks';

export default function EditPersonInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(editProfileThunk());
  }, []);
  return (
    <div>
      <EditPersonInfoForm />
    </div>
  );
}
