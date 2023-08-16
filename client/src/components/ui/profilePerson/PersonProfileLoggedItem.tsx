// import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import EditIcon from '@mui/icons-material/Edit';
// import { Link } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
// import PersonLoggedInfoItem from './PersonLoggedInfoItem';

// const bull = (
//   <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
//     •
//   </Box>
// );
// export default function PersonProfileLoggedItem(): JSX.Element {
//   const dispatch = useAppDispatch();

//   const profile = useAppSelector((store) => store.profile.oneProfile);

//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           {profile?.username} Привет!
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       <Link to="/profile/lk/edit">
//         <EditIcon />
//       </Link>
//       <PersonLoggedInfoItem />
//     </Card>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import PersonLoggedInfoItem from './PersonLoggedInfoItem';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function PersonProfileLoggedItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((store) => store.profile.oneProfile);
  const questions = useAppSelector((store) => store.questionsAnswers.questionsAnswers);

  // Calculate completion percentage
  const completedCount = questions.reduce((count, question) => {
    if (question.Answers.every((answer) => answer.isCorrect)) {
      count += 1;
    }
    return count;
  }, 0);

  const completionPercentage = (completedCount / questions.length) * 100;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {profile?.username} Привет!
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Box mt={2}>
          <Typography variant="subtitle1">Прогресс выполнения:</Typography>
          <CircularProgress variant="determinate" value={completionPercentage} />
          <Typography>{completionPercentage.toFixed(2)}%</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <Link to="/profile/lk/edit">
        <EditIcon />
      </Link>
      <PersonLoggedInfoItem />
    </Card>
  );
}
