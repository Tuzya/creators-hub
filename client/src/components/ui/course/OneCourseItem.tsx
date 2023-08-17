import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from '../../../redux/hooks';
import { cardStyle } from '../../styles';
import EditModal from '../editModal/editCourseModal';
import './AllCoursesStyles.css'

export default function OneCourseItem(): JSX.Element {
  const onecourse = useAppSelector((store) => store.allcourses.onecourse);
  const company = useAppSelector((store) => store.company);
  const { courseId } = useParams();
  const [open, setOpen] = useState(0);
  const handleDownload = (): void => {
    if (onecourse?.downloadLink) {
      // Replace "your-server-port" with the actual port number of your server
      const downloadUrl = `http://localhost:3001/uploads/${onecourse.downloadLink}`;
      window.open(downloadUrl, '_blank'); // Open the link in a new tab/window for download
    }
  };

  return (
    
    <div className='onecourse-container'>
    <EditModal setOpen={setOpen} open={open}/>
          
        <Typography >
        <h2 className='course-title'>Курс</h2>
        </Typography>
        <Typography variant="h5" component="div">
         <h2>{onecourse?.title}</h2> 
        </Typography>

        <Typography sx={{ mb: 15 }} color="text.secondary">
          <h3>{onecourse?.body}</h3>
        </Typography>
        
      {onecourse?.downloadLink && (
          <button
          type='button'
          className="allcourses-button"
          
          onClick={handleDownload}>
            Скачать PDF
          </button>
          
        )}
         {courseId && (
          <Link to={`/company/allcourses/${courseId}/test`}>
            <button
          type='button'
          className="allcourses-button"
            >Пройти тест</button>
          </Link>
        )}
        {courseId && company.status === 'logged' && (
          <>
          <Link to={`/company/allcourses/${courseId}/addQuestion`}>
            <button
          type='button'
          className="allcourses-button"
            >Добавить тест</button>
          </Link>
          {/* <EditIcon onClick={() => 
            setOpen(onecourse?.id)}/> */}
            </>
        )}
       
     
      </div>
    
  );
}
