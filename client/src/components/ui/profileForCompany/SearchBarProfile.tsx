import React from 'react'
import { TextField } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import type { RootState } from '../../../redux/store'
import type { SearchParamsProfile } from '../../../types/profileType/profileTypes'


type SearchBarProps = {
   setSearchParamsProfile: (params: SearchParamsProfile) => void
}

function SearchBarProfile({ setSearchParamsProfile }: SearchBarProps): JSX.Element {
   const dispatch = useAppDispatch()
   const searchParams = useAppSelector((state: RootState) => state.profile.searchParamsProfile)
   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newSearchParams = {
         ...searchParams,
         query: event.target.value.toLowerCase(),
      }
      dispatch(setSearchParamsProfile(newSearchParams))

   }

   return (
      <TextField
         label="Search"
         variant="outlined"
         fullWidth
         onChange={handleSearch}
      />
   );
}

export default SearchBarProfile;