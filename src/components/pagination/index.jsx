import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationRounded=()=> {
  return (
    <Stack >
      <Pagination count={2} shape="rounded" />
      
    </Stack>
  );
}