import React, { useState } from 'react'
import { CompanyFormType } from '../../types/companyFormType';
import { addCompanyThunk } from '../../redux/slices/companys/companyThunk';
import { useAppDispatch } from '../../redux/hooks';

export default function CompanyFormAddCourses(): JSX.Element {
   const dispatch = useAppDispatch();
   const [courseData, setCourseData] = useState<CompanyFormType>({
      title: '',
      body: '',
      downloadLink: '',
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Отправляем данные на сервер с помощью санки
      dispatch(addCompanyThunk(courseData));

      // Очищаем форму после отправки
      setCourseData({
         title: '',
         body: '',
         downloadLink: '',
      });
   };
   console.log('popa team lead');

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Title:</label>
            <input
               type="text"
               value={.title}
               onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
            />
         </div>
         <div>
            <label>Body:</label>
            <textarea
               value={courseData.body}
               onChange={(e) => setCourseData({ ...courseData, body: e.target.value })}
            />
         </div>
         <div>
            <label>Download Link:</label>
            <input
               type="text"
               value={courseData.downloadLink}
               onChange={(e) => setCourseData({ ...courseData, downloadLink: e.target.value })}
            />
         </div>
         <button onClick={() => void dispatch(addCompanyThunk(courseData))} type="submit">Add Course</button>
      </form>
   )
}
