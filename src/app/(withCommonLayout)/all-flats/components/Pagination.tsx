// "use client";
// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function PaginationControlled({ totalPages, currentPage }: { totalPages: number, currentPage: number }): React.ReactElement {
//   const [page, setPage] = React.useState(1); // Start on page 1 by default

//   const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
//     setPage(newPage);
//     // (Optional) You can add logic here to handle page changes in your component,
//     // such as fetching new data based on the selected page
//   };

//   return (
//     <Stack spacing={2}>
//       <Pagination
//         color="primary"
//         count={totalPages} // Ensure totalPages is a number
//         page={page}
//         onChange={handleChange}
//         showFirstButton={true} // Display first page button
//         showLastButton={true}  // Display last page button
//         disabled={currentPage === page} // Disable pagination if only one page
//       />
//     </Stack>
//   );
// }
