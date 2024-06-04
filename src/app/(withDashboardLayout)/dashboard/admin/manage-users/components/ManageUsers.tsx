"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import ManageUsersModal from './ManageUsersModal';
import { useGetAllUsersQuery } from '@/redux/api/userApi';
import ConfirmDeleteUserModal from './ConfirmDeleteUserModal';
import { TUserProfile } from '@/types';


const ManageUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [userData, setUserData] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const {data, isLoading} = useGetAllUsersQuery({});

    const users = data?.data?.data;

  const handleEdit = (user: any) => {
    setUserData(user);
    setIsModalOpen(true);
  };


  const handleDelete = (id: string) => {
    setUserId(id);
    setDeleteOpen(true);
  };



    const columns: GridColDef[] = [
        { field: 'username', headerName: 'User Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 2 },
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
                <IconButton aria-label="delete" onClick={()=>handleEdit(row)}>
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
                <IconButton aria-label="delete" onClick={()=>handleDelete(row.id)}>
                  <DeleteIcon sx={{color: "red"}}/>
                </IconButton>
              );
            },
          },
          
        ];



    return (
        <Box>
          <ConfirmDeleteUserModal open={deleteOpen} setOpen={setDeleteOpen} id={userId}/>
          <ManageUsersModal open={isModalOpen} setOpen={setIsModalOpen} user={userData}/>
            {
                !isLoading ? (
            <Box sx={{mt: 5, width: {xs: "280px", sm: "400px", md: "100%"}, overflowX: {xs: "scroll", md: "none"}}}>
                <Box my={2} sx={{minWidth: "600px"}}>
                    <DataGrid
                        rows={users ?? []}
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