"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import ViewAllFlatsModal from './ViewAllFlatsModal';

const ViewAllFlats = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [flatId, setFlatId] = useState<number>(null);

  const handleEdit = (id: number) => {
    setFlatId(id);
    setIsModalOpen(true);
  }

    const schedules = [
        { id: 1, location: 'New York', bedroom: 2, rentAmount: 2500 , status: "Pending"},
        { id: 2, location: 'Los Angeles', bedroom: 3, rentAmount: 3000 , status: "Approved"},
        { id: 3, location: 'Chicago', bedroom: 1, rentAmount: 1500 , status: "Pending"},
        { id: 4, location: 'Houston', bedroom: 2, rentAmount: 2000 , status: "Reject"},
        { id: 5, location: 'Phoenix', bedroom: 4, rentAmount: 3500, status: "Pending" }
    ];

const isLoading = false;

    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'bedroom', headerName: 'Bedroom', flex: 1 },
        { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
        {
            field: "manage",
            headerName: "Manage",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
              return (
                <IconButton aria-label="delete" onClick={()=>handleEdit(row.id)}>
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
                <IconButton aria-label="delete">
                  <DeleteIcon sx={{color: "red"}}/>
                </IconButton>
              );
            },
          },
          
        ];



    return (
        <Box>
          <ViewAllFlatsModal open={isModalOpen} setOpen={setIsModalOpen} flatId={flatId}/>
            {
                !isLoading ? (
            <Box sx={{mt: 5, width: {xs: "280px", sm: "400px", md: "100%"}, overflowX: {xs: "scroll", md: "none"}}}>
                <Box my={2} sx={{minWidth: "600px"}}>
                    <DataGrid
                        rows={schedules ?? []}
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