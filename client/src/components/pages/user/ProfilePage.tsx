import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import ProfileItemCard from '../../ui/ProfileItemCard';

export default function ProfilePage(): JSX.Element {
  const dispatch = useAppDispatch();


  return (

    <ProfileItemCard />
  )
}
