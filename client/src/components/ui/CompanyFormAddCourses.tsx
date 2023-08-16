// import React, { useState } from 'react';
// import { TextField } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { addCompanyThunk } from '../../redux/slices/coursesOne/coursesThunk';
// import type { CoursesOneFormType, CoursesOneType } from '../../types/coursesOneType';

// export default function CompanyFormAddCourses(): JSX.Element {
//   const dispatch = useAppDispatch();

//   const [courseData, setCourseData] = useState<CoursesOneFormType>({
//     title: '',
//     body: '',
//     downloadLink: '', // Здесь будет храниться имя загруженного файла (PDF)
//   });

//   const [file, setFile] = useState<File | null>(null); // Хранит выбранный файл

//   const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
//     setCourseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
//     if (e.currentTarget.files && e.currentTarget.files.length > 0) {
//       setFile(e.currentTarget.files[0]);
//     }
//   };

//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', courseData.title);
//     formData.append('body', courseData.body);

//     if (file !== null) {
//       formData.append('downloadLink', file);
//     }

//     const courseDataWithoutId: Omit<CoursesOneType, 'id'> = {
//       title: courseData.title,
//       body: courseData.body,
//       downloadLink: '', // Оставьте это пустым, так как вы добавляете файл в formData
//     };

//     try {
//       void dispatch(addCompanyThunk(courseDataWithoutId, formData));
//       setCourseData({
//         title: '',
//         body: '',
//         downloadLink: '',
//       });
//       setFile(null);
//     } catch (error) {
//       console.error('An error occurred while adding the course:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <TextField
//           variant="outlined"
//           name="title"
//           label="Title"
//           value={courseData.title}
//           onChange={changeHandler}
//         />
//         <TextField
//           variant="outlined"
//           name="body"
//           label="Body"
//           value={courseData.body}
//           onChange={changeHandler}
//         />
//         <input
//           type="file"
//           name="downloadLink"
//           value={courseData.downloadLink}
//           onChange={handleFileChange} // Обработчик выбора файла
//         />
//       </div>
//       <button type="submit">Add Course</button>
//     </form>
//   );
// }

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { addCompanyThunk } from '../../redux/slices/coursesOne/coursesThunk';
import type { CoursesOneFormType } from '../../types/coursesOneType';
import { useAppDispatch } from '../../redux/hooks';

export default function CompanyFormAddCourses(): JSX.Element {
  const dispatch = useAppDispatch();

  const [courseData, setCourseData] = useState<CoursesOneFormType>({
    title: '',
    body: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCourseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('body', courseData.body);

    if (file !== null) {
      formData.append('downloadLink', file);
    }

    try {
      await dispatch(addCompanyThunk(formData));
      setCourseData({
        title: '',
        body: '',
      });
      setFile(null);
    } catch (error) {
      console.error('An error occurred while adding the course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button type="submit">Add Course</Button>
    </form>
  );
}
