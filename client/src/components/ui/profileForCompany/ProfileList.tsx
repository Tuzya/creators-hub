import { Box } from '@mui/material';
import React from 'react';
import ProfileItemCard from './ProfileItemCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import SearchBarProfile from './SearchBarProfile';
import { setSearchParamsProfile } from '../../../redux/slices/profiles/profileSlice';


export default function ProfileList(): JSX.Element {
  const dispatch = useAppDispatch()
  const profiles = useAppSelector((state) => state.profile.profiles);
  const searchParamsProfile = useAppSelector((store) => store.profile.searchParamsProfile)

  const filterProfile = profiles.filter((profile) => profile.username.toLowerCase().includes(searchParamsProfile.query))

  return (
    <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
      <SearchBarProfile setSearchParamsProfile={(params) => dispatch(setSearchParamsProfile(params))} />
      {filterProfile.map((profile) => (
        <Box key={profile.id} p={1}>
          <ProfileItemCard key={profile.id} profile={profile} />
        </Box>
      ))}
    </Box>
  );
}
