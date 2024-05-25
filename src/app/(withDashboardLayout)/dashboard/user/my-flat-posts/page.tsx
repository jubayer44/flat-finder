"use client";
import { Box, Stack, Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const MyFlatPosts = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [schedules, setSchedules] = useState([]);
    // const [deleteSchedule] = useDeleteScheduleMutation();

const isLoading = null;

    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'bedroom', headerName: 'Bedroom', flex: 1 },
        { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
        // {
        //     field: "action",
        //     headerName: "Action",
        //     flex: 1,
        //     headerAlign: "center",
        //     align: "center",
        //     renderCell: ({ row }) => {
        //       return (
        //         <IconButton aria-label="delete">
        //           <DeleteIcon sx={{ color: "red" }} />
        //         </IconButton>
        //       );
        //     },
        //   },
        ];
    return (
        <Box >
            <Box sx={{mt: 5}}>
            {
                !isLoading ? (
                <Box my={2}>
                    <DataGrid
                        rows={schedules ?? []}
                        columns={columns}
                    />
                </Box>) : (
                <Box>Loading...</Box>
            )
            }
            </Box>
        </Box>
    );
};

export default MyFlatPosts;