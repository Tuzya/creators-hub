import { Box } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ProfileItemCard from './ProfileItemCard';

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
