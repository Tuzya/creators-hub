import type { ChangeEvent, FormEvent } from 'react';
import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  textFieldClasses,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { PersonInfoType } from '../../../types/profileType/profileTypes';
import { editProfileThunk } from '../../../redux/slices/profiles/profileThunk';
import './editPerson.css';
import { textFieldStyle } from '../../styles/styles';

export default function EditPersonInfoForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const editProfile = useAppSelector((state) => state.profile);
  const person = useAppSelector((store) => store.profile.personLoggedInfo);
  const [formData, setFormData] = useState<PersonInfoType>({
    city: person?.city || '',
    companies: person?.companies || '',
    about: person?.about || '',
    phone: person?.phone || '',
    birthDate: person?.birthDate || '',
    sex: person?.sex || '',
    photo: person?.photo || null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        photo: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('city', formData.city);
    formDataToSend.append('companies', formData.companies);
    formDataToSend.append('about', formData.about);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('birthDate', formData.birthDate);
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
    <form className="edit-person-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <TextField
          className="edit-person-input"
          variant="outlined"
          name="city"
          label="Город"
          value={formData.city}
          onChange={handleChange}
          sx={{ width: '1200px', marginTop: '-150px' }}
        />
        <TextField
          className="edit-person-input"
          variant="outlined"
          name="companies"
          label="Компания"
          value={formData.companies}
          onChange={handleChange}
          sx={{ width: '1200px', marginTop: '-90px' }}

          // sx={{}}
        />
        <TextField
          className="edit-person-input"
          variant="outlined"
          name="phone"
          label="Телефон"
          value={formData.phone}
          onChange={handleChange}
          sx={{ width: '1200px', marginTop: '-30px' }}
        />
        <TextField
          className="edit-person-input"
          variant="outlined"
          name="about"
          label="Любимая фраза"
          value={formData.about}
          onChange={handleChange}
          multiline
          rows={2}
          sx={{ width: '1200px', marginTop: '30px' }}
        />
        <FormControl variant="outlined" className="edit-person-input">
          <InputLabel sx={{ marginTop: '20px' }}>Ваш Пол</InputLabel>
          <Select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            sx={{ width: '1200px', marginTop: '30px' }}
          >
            <MenuItem value="Муж">Муж</MenuItem>
            <MenuItem value="Жен">Жен</MenuItem>
            <MenuItem value="Не выбрано">Не выбрано</MenuItem>
            <MenuItem value="Боевой вертолёт">Боевой вертолёт</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="input-group">
        <input
          className="edit-person-file-input"
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <Button
        className="question-button"
        type="submit"
        style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
      >
        Сохранить изменения
      </Button>
    </form>
  );
}
