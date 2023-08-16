import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from '../../../redux/hooks';
import { cardStyle } from '../../styles';
import EditModal from '../editModal/editCourseModal'

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
    <>
    <EditModal setOpen={setOpen} open={open}/>
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Курс
        </Typography>
        <Typography variant="h5" component="div">
          {onecourse?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {onecourse?.body}
        </Typography>
        {onecourse?.downloadLink && (
          <Button size="small" onClick={handleDownload}>
            Скачать PDF
          </Button>
          
        )}
        
      </CardContent>
      <CardActions>
        {courseId && company.status === 'logged' && (
          <>
          <Link to={`/company/allcourses/${courseId}/addQuestion`}>
            <Button size="small">Добавить тест</Button>
          </Link>
          <EditIcon onClick={() => 
            setOpen(onecourse?.id)}/>
            </>
        )}
        {courseId && (
          <Link to={`/company/allcourses/${courseId}/test`}>
            <Button size="small">Пройти тест</Button>
          </Link>
        )}
      </CardActions>
    </Card>
    </>
  );
}
