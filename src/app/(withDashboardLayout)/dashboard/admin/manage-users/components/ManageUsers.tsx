"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import ManageUsersModal from './ManageUsersModal';

const ManageUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [userId, setUserId] = useState<number>(0);

  const handleEdit = (id: number) => {
    setUserId(id);
    setIsModalOpen(true);
  }

    const schedules = [
        { id: 1, username: 'jasbts44', email: "user1@gmail.com", role: "user", status: "Activate"},
        { id: 2, username: 'jasbts45', email: "user2@gmail.com", role: "user", status: "Deactivate"},
        { id: 3, username: 'jasbts46', email: "user3@gmail.com", role: "user", status: "Activate"},
        { id: 4, username: 'jasbts47', email: "user4@gmail.com", role: "user", status: "Activate"},
        { id: 5, username: 'jasbts48', email: "user5@gmail.com", role: "user", status: "Deactivate"}
    ];

const isLoading = false;

    const columns: GridColDef[] = [
        { field: 'username', headerName: 'User Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'role', headerName: 'Role', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
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
          <ManageUsersModal open={isModalOpen} setOpen={setIsModalOpen} userId={userId}/>
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

export default ManageUsers;