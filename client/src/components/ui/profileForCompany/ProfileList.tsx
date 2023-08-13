import { Box } from '@mui/material';
import React from 'react';
import ProfileItemCard from './ProfileItemCard';
import { useAppSelector } from '../../../redux/hooks';

export default function ProfileList(): JSX.Element {
  const profiles = useAppSelector((state) => state.profile.profiles);

  return (
    <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
      {profiles.map((profile) => (
        <Box key={profile.id} p={1}>
          <ProfileItemCard key={profile.id} profile={profile} />
        </Box>
      ))}
    </Box>
  );
}
