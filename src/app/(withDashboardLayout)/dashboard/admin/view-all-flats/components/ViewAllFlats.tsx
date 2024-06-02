"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import ViewAllFlatsModal from './ViewAllFlatsModal';
import { useGetAllFlatsQuery } from '@/redux/api/flatApi';
import ConfirmDeleteModal from '@/components/Dashboard/CommonPages/MyFlatPosts/ConfirmDeleteModal';

const ViewAllFlats = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [flatId, setFlatId] = useState<string>("");
    const {data, isLoading} = useGetAllFlatsQuery({});

    const flats = data?.data;
    
    const handleEdit = (id: number) => {
    setFlatId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    setFlatId(id);
    setDeleteOpen(true);
  };
  


    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
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
                <IconButton aria-label="delete" onClick={()=> handleDelete(row?.id)}>
                  <DeleteIcon sx={{color: "red"}}/>
                </IconButton>
              );
            },
          },
          
        ];



    return (
        <Box>
          <ConfirmDeleteModal open={deleteOpen} setOpen={setDeleteOpen} id={flatId}/>
          <ViewAllFlatsModal open={isModalOpen} setOpen={setIsModalOpen} flatId={flatId}/>
            {
                !isLoading ? (
            <Box sx={{mt: 5, width: {xs: "280px", sm: "400px", md: "100%"}, overflowX: {xs: "scroll", md: "none"}}}>
                <Box my={2} sx={{minWidth: "600px"}}>
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