"use client";
import { useGetRequestsOnMyFlatQuery } from "@/redux/api/flatShareRequestApi";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import { Box, IconButton, List, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import RequestsOnMyFlatModal from './RequestsOnMyFlatModal';

type TItems = any

const RequestDetails = ({ flatId }: { flatId: string }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [items, setItems] = useState<TItems>({} as TItems);
    const { data, isLoading } = useGetRequestsOnMyFlatQuery({});

    const reqData = data?.data?.find((flat: any) => flat?.id === flatId);
    const flatDetails = reqData;

    const handleChangeStatus = (item: any) => {
        const { id, status } = item;
        setItems(item);

        setIsModalOpen(true);
    }

    const columns: GridColDef[] = [
        {
            field: 'username',
            headerName: 'User Name',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Typography variant="body1" component="p">{row?.user?.username}</Typography>
                );
            },
        },
        {
            field: 'email',
            headerName: 'User Email',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Typography variant="body1" component="p">{row?.user?.email}</Typography>
                );
            },
        },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <IconButton aria-label="delete" onClick={() => handleChangeStatus(row)}>
                        <EditIcon />
                    </IconButton>
                );
            },
        },
    ];

    if (isLoading) {
        return <Typography>Loading...</Typography>
    }



    return (
        <>
            <Box sx={{ maxWidth: "sm", margin: "0 auto" }}>
                <RequestsOnMyFlatModal open={isModalOpen} setOpen={setIsModalOpen} items={items} />
                <Image height={400} width={700} src={flatDetails?.photos[0]} alt="Photo" style={{ maxWidth: '100%', marginBottom: '10px' }} />

                <Stack direction="row" spacing={2} justifyContent="space-between" my={2}>
                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <AttachMoneyIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Rent Amount
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px", fontSize: "14px" }}>
                            {flatDetails?.rentAmount}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <BedIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Bedrooms
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px", fontSize: "14px" }}>
                            {flatDetails?.bedrooms}
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="space-between" my={2}>
                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Location
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px", fontSize: "14px" }}>
                            {flatDetails?.location}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <StarsIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Amenities
                        </Typography>
                        {
                            flatDetails?.amenities?.length ? <List>
                                {flatDetails?.amenities?.map((amenity: string, index: number) => (
                                    <Typography key={index} variant="body1" component="p" sx={{ fontSize: "14px", ml: 2 }}> * {amenity}</Typography>
                                ))}
                            </List> : ""
                        }
                    </Box>
                </Stack>
            </Box>
            <Typography variant="body1" component="p" fontWeight="bold" m={2}>Request to share</Typography>

            <Box sx={{ mt: 5, width: { xs: "280px", sm: "400px", md: "100%" }, overflowX: { xs: "scroll", md: "none" } }}>
                <Box my={2} sx={{ minWidth: "600px" }}>
                    <DataGrid
                        rows={flatDetails?.requests ?? []}
                        columns={columns}
                        hideFooter={true}
                    />
                </Box>
            </Box>
        </>
    );
};

export default RequestDetails;
