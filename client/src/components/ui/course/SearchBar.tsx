import React from 'react';
import { TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { RootState } from '../../../redux/store';
import type { SearchParams } from '../../../types/courseType/courseType';
import { textFieldStyle } from '../../styles/styles';

type SearchBarProps = {
  setSearchParams: (params: SearchParams) => void;
};

function SearchBar({ setSearchParams }: SearchBarProps): JSX.Element {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state: RootState) => state.allcourses.searchParams);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearchParams = {
      ...searchParams,
      query: event.target.value.toLowerCase(),
    };
    dispatch(setSearchParams(newSearchParams));
  };

  return (
    <TextField
      label="Поиск"
      variant="outlined"
      sx={textFieldStyle}
      fullWidth
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
