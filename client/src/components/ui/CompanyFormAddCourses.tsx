import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addCompanyThunk } from '../../redux/slices/coursesOne/coursesThunk';
import type { CoursesOneFormType, CoursesOneType } from '../../types/coursesOneType';


export default function CompanyFormAddCourses(): JSX.Element {
   const dispatch = useAppDispatch();
   const company = useAppSelector(store => store.company)

   const [courseData, setCourseData] = useState<CoursesOneFormType>({
      title: '',
      body: '',
      downloadLink: '', // Здесь будет храниться имя загруженного файла (PDF)
   });

   const [file, setFile] = useState<File | null>(null); // Хранит выбранный файл

   const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
      setCourseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
      if (e.currentTarget.files && e.currentTarget.files.length > 0) {
         setFile(e.currentTarget.files[0]);
      }
   };

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', courseData.title);
      formData.append('body', courseData.body);

      if (file !== null) {
         formData.append('downloadLink', file);
      }

      const courseDataWithoutId: Omit<CoursesOneType, "id"> = {
         title: courseData.title,
         body: courseData.body,
         downloadLink: '', // Оставьте это пустым, так как вы добавляете файл в formData
      };

      try {
         void dispatch(addCompanyThunk({ company.id, formData: courseDataWithoutId }));
         setCourseData({
            title: '',
            body: '',
            downloadLink: '',
         });
         setFile(null);
      } catch (error) {
         console.error('An error occurred while adding the course:', error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <TextField
               variant="outlined"
               name="title"
               label="Title"
               value={courseData.title}
               onChange={changeHandler}
            />
            <TextField
               variant="outlined"
               name="body"
               label="Body"
               value={courseData.body}
               onChange={changeHandler}
            />
            <input
               type="file"
               accept=".pdf"
               onChange={handleFileChange} // Обработчик выбора файла
            />
         </div>
         <button type="submit">Add Course</button>
      </form>
   );
}
