import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { editProfileThunk } from '../../../redux/slices/profiles/profileThunk';
import type { EditProfileType } from '../../../types/profileType/profileTypes';

export default function EditProfileForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { editProfile } = useAppSelector((state) => state.profile);
  const [formData, setFormData] = useState<EditProfileType>({
    city: '',
    birthDate: '',
    phone: '',
    about: '',
    companies: '',
    photo: '',
  });

  useEffect(() => {
    if (editProfile) {
      setFormData({
        city: editProfile.city || '',
        birthDate: editProfile.birthDate || '',
        phone: editProfile.phone || '',
        about: editProfile.about || '',
        companies: editProfile.companies || '',
        photo: editProfile.photo || '',
      });
    }
  }, [editProfile]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formData) {
      void dispatch(editProfileThunk(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          variant="outlined"
          name="city"
          label="City"
          value={formData?.city || ''}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="birthDate"
          label="Birth Date"
          value={formData?.birthDate || ''}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="phone"
          label="Phone"
          value={formData?.phone || ''}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="about"
          label="About"
          value={formData?.about || ''}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="companies"
          label="Companies"
          value={formData?.companies || ''}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="photo"
          label="Photo"
          value={formData?.photo || ''}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Edit Profile
      </Button>
    </form>
  );
}
