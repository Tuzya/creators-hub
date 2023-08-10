import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { getProfileThunk } from '../../../redux/slices/profiles/profileThunk';
import ProfileItemCard from '../../ui/ProfileItemCard';

export default function ProfilePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.oneProfile)


  useEffect(() => {
    void dispatch(getProfileThunk())
  }, [])

  return (
    <ProfileItemCard profile={profile} />
  )
}
