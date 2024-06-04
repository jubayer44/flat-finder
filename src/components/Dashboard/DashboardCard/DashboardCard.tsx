import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { getUserInfo } from '@/services/authServices';
import { useGetMetaDataQuery } from '@/redux/api/userApi';
import Image from 'next/image';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Link from 'next/link';
import { TFlat } from '@/types';

const DashboardCard = ({data}: {data: TFlat}) => {

    return (
        <Grid item xs={12} md={6}  component={Link} href={`/dashboard/flat-details/${data?.id}`}>
                       <Stack direction={{xs: "column", sm: "column", md: "row"}} alignItems="center" spacing={2} sx={{boxShadow: "5px 6px 20px darkgray", borderRadius: "10px", p: 1}}>
                            <Box sx={{borderRadius: "10px", overflow: "hidden"}}>
                                <Image src={data?.photos[0]} alt="flat-image" width={150} height={100} style={{borderRadius: "0px 55px 0px 0px"}}/>
                            </Box>
                            <Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <LocationOnOutlinedIcon sx={{color: "skyblue", fontSize: "16px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">{data?.location}</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <BedOutlinedIcon sx={{color: "skyblue", fontSize: "16px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">{data?.bedrooms}</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <MonetizationOnOutlinedIcon sx={{color: "skyblue", fontSize: "15px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">Rent Amount: ${data?.rentAmount}</Typography>
                                </Box>
                            </Box>
                       </Stack>
                    </Grid>
    )
};

export default DashboardCard;