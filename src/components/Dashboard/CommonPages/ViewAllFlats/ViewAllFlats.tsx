"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import ViewAllFlatsModal from './ViewAllFlatsModal';
import ConfirmDeleteModal from '../MyFlatPosts/ConfirmDeleteModal';
import Link from 'next/link';

const ViewAllFlats = ({ flats, isLoading }: { flats: any, isLoading: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [flatId, setFlatId] = useState<string>("");

  const handleEdit = (id: string) => {
    setFlatId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    setFlatId(id);
    setDeleteOpen(true);
  };



  const columns: GridColDef[] = [
    {
      field: 'location',
      headerName: 'Location',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box component={Link} href={`/dashboard/flat-details/${row.flatId}`} sx={{ color: "blue" }}>
            {row?.flat?.location}
          </Box>
        );
      },
    },
    { field: 'bedrooms', headerName: 'Bedrooms', flex: 1 },
    { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
    {
      field: "manage",
      headerName: "Manage",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleEdit(row.id)}>
            <EditIcon />
          </IconButton>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row?.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },

  ];

  if (!isLoading && !flats?.length) {
    return <Typography variant="body1" component="p" my={4} fontWeight="bold" textAlign="center">No Data Found.</Typography>
  }


  return (
    <Box>
      <ConfirmDeleteModal open={deleteOpen} setOpen={setDeleteOpen} id={flatId} />
      <ViewAllFlatsModal open={isModalOpen} setOpen={setIsModalOpen} flatId={flatId} />
      {
        !isLoading ? (
          <Box sx={{ mt: 5, width: { xs: "280px", sm: "400px", md: "100%" }, overflowX: { xs: "scroll", md: "none" } }}>
            <Box my={2} sx={{ minWidth: "600px" }}>
              <DataGrid
                rows={flats ?? []}
                columns={columns}
                hideFooter={true}
              />
            </Box>
          </Box>) : (
          <Box>Loading...</Box>
        )
      }
    </Box>
  );
};

export default ViewAllFlats;