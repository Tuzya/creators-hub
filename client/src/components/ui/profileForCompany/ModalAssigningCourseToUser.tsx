import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { putCourseToUserFromCompanyThunk } from '../../../redux/slices/company/companyThunks';

export default function ModalAssigningCourseToUser({ open, setOpen, profile }: any) {
  const allCourses = useAppSelector((store) => store.allcourses.courses);
  const dispatch = useAppDispatch()


  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCourseSelect = (event) => {
    setSelectedCourses(event.target.value);
  };


  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Назначение курсов сотруднику</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Выберите курсы</InputLabel>
            <Select
              multiple
              value={selectedCourses}
              onChange={handleCourseSelect}
              renderValue={(selected) =>
                selected.map((courseId) => {
                  const course = allCourses.find((c) => c.id === courseId);
                  return course ? course.title : '';
                }).join(', ')
              }
            >
              {allCourses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  <Checkbox checked={selectedCourses.includes(course.id)} />
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button   onClick={() => {
    void dispatch(putCourseToUserFromCompanyThunk({ userId: profile.id, selectedCourses }));
    handleClose(); 
  }} color="success">
            Назначить
          </Button>
          <Button onClick={handleClose} color="error">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
