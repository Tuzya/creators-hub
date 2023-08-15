import type { ChangeEvent, FormEvent } from 'react';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { PersonInfoType } from '../../../types/profileType/profileTypes';
import { editProfileThunk } from '../../../redux/slices/profiles/profileThunk';

export default function EditPersonInfoForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  // const { editProfile } = useAppSelector((state) => state.profile);
=======
  const editProfile = useAppSelector((state) => state.profile.editProfile);
>>>>>>> dev
  const person = useAppSelector((store) => store.profile.personLoggedInfo);
  const [formData, setFormData] = useState<PersonInfoType>({
    city: person?.city || '',
    birthDate: person?.birthDate || '',
    phone: person?.phone || '',
    about: person?.about || '',
    companies: person?.companies || '',
    sex: person?.sex || '',
    photo: person?.photo || '', // Изменили значение на null, так как это будет объект типа File | null
  });

  useEffect(() => {
    if (editProfile) {
      console.log({ editProfile });

      setFormData(editProfile);
    }
  }, [editProfile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        photo: e.target.files[0], // Устанавливаем файл в поле photo
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('city', formData.city);
    formDataToSend.append('birthDate', formData.birthDate);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('about', formData.about);
    formDataToSend.append('companies', formData.companies);
    formDataToSend.append('sex', formData.sex);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }

    try {
      await dispatch(editProfileThunk(formDataToSend));
      navigate('/profile/lk');
    } catch (error) {
      console.error('Error editing profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="file"
          name="photo"
          accept="image/*" // Позволяет выбирать только изображения
          onChange={handleFileChange}
        />
        <TextField
          variant="outlined"
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="birthDate"
          label="Birth Date"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="about"
          label="About"
          value={formData.about}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="companies"
          label="Companies"
          value={formData.companies}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          name="sex"
          label="Sex"
          value={formData.sex}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Edit Profile
      </Button>
    </form>
  );
}
