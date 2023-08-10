import { Box, CircularProgress } from '@mui/material';
import React from 'react';

type LoaderProps = {
  children: React.ReactElement;
  isLoading: boolean;
};

export default function Loader({ children, isLoading }: LoaderProps): JSX.Element {
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    );
  return children;
}
