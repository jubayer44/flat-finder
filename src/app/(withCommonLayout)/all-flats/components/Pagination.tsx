"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import {Box} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function PaginationControlled({ totalPages }: { totalPages: number }): React.ReactElement {
  const [page, setPage] = React.useState(1); 
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    router.push(`/all-flats?page=${newPage}`)
  };


  return (
    <Box>
      <Pagination
        color="primary"
        count={totalPages} 
        page={page}
        onChange={handleChange}
        showFirstButton={true}
        showLastButton={true} 
      />
    </Box>
  );
}
