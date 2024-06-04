"use client";
import DashboardCard from '@/components/Dashboard/DashboardCard/DashboardCard';
import { useGetAllFlatsQuery, useGetMyFlatsQuery } from '@/redux/api/flatApi';
import { useGetMyRequestedFlatQuery } from '@/redux/api/flatShareRequestApi';
import { useGetMetaDataQuery, useGetMyProfileQuery } from '@/redux/api/userApi';
import { getUserInfo } from '@/services/authServices';
import { TFlat, TFlatRequestResponse } from '@/types';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const [role, setRole] = useState<string>("");
  const { data, isLoading, refetch } = useGetMetaDataQuery({});
  const { data: myFlats, isLoading: isLoadingMyFlats, refetch: myFlatRefetch } = useGetMyFlatsQuery({});
  const { data: allFlats, isLoading: isAllFlatsLoading, refetch: allFlatRefetch } = useGetAllFlatsQuery({});
  const { data: myRequestedFlats, isLoading: isLoadingMyRequestedFlats, refetch: requestedFlatRefetch } = useGetMyRequestedFlatQuery({});
  const { data: userData } = useGetMyProfileQuery({});
  const user = userData?.data;
  const router = useRouter();
  

  const recentAllFlats: TFlat[] = allFlats?.data?.slice(0, 6);
  const recentMyFlats: TFlat[] = myFlats?.data?.slice(0, 6);
  const recentMyRequestedFlats: TFlatRequestResponse[] = myRequestedFlats?.data

  const posts = (role === "admin" ? "All posts" : "My posts") || 0;
  const flatRequests = (role === "admin" ? "All flat requests" : "My flat requests") || 0;
  const others = (role === "admin" ? "All Users" : "Requests on my flat") || 0;

  const postValue = data?.data[0]?.flatTotal;
  const flatRequestsValue = data?.data[1]?.flatRequestTotal;
  const othersValue = (role === "admin" ? data?.data[2]?.userTotal : data?.data[2]?.requestOnMyFlatTotal)

  let title: string = "";

  if (role === "user" && recentMyRequestedFlats?.length) {
    title = "Recent flat share requests";
  } else if (role === "user" && !recentMyRequestedFlats?.length && recentMyFlats?.length) {
    title = "Recent flat posts";
  } else if (role === "admin" && recentAllFlats?.length) {
    title = "Recent flat posts";
  };


  const stats = [
    { label: posts, value: postValue, icon: <PostAddIcon sx={{ color: "skyblue" }} /> },
    { label: flatRequests, value: flatRequestsValue, icon: <RequestQuoteIcon sx={{ color: "skyblue" }} /> },
    { label: others, value: othersValue, icon: <AssignmentTurnedInIcon sx={{ color: "skyblue" }} /> },
  ];
  useEffect(() => {
    const user = getUserInfo();
    setRole(user?.role)
    router.refresh();
    refetch();
    myFlatRefetch()
    allFlatRefetch()
    requestedFlatRefetch()

  }, [role, user?.username]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {!isLoading ? stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.paper', hight: "150px" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {stat?.icon}
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: "primary" }}>{stat?.value}</Typography>
              </Stack>
              <Typography sx={{ fontWeight: 'bold', color: "primary" }}>{stat?.label}</Typography>
            </Paper>
          </Grid>
        )) : ""}
      </Grid>

      <Typography variant="body1" component="h3" sx={{ fontWeight: "bold", fontSize: "20px", mt: 4 }} >{title}</Typography>
      <>
        {
          isAllFlatsLoading || isLoadingMyRequestedFlats || isLoadingMyFlats ? <Typography variant="body1" component="p" sx={{ fontWeight: "bold", fontSize: "16px", mt: 4, textAlign: "center" }}>Loading...</Typography> :
            <Grid container spacing={3} my={1} justifyContent="center">
              {
                role === "admin" && (
                  <>
                    {
                      recentAllFlats?.length ?
                        recentAllFlats.map((data) => <DashboardCard data={data} key={data.id} />) :
                        <Typography variant="body1" component="p" sx={{ fontWeight: "bold", fontSize: "16px", mt: 4 }}>No data found</Typography>
                    }
                  </>
                )
              }
              {
                role === "user" && (
                  <>
                    {
                      recentMyRequestedFlats?.length ?
                        recentMyRequestedFlats.map((data) => <DashboardCard data={(data.flat)} key={data.id} />) :
                        recentMyFlats?.length ?
                          recentMyFlats.map((data) => <DashboardCard data={data} key={data.id} />) :
                          <Typography variant="body1" component="p" sx={{ fontWeight: "bold", fontSize: "16px", mt: 4 }}>No data found</Typography>
                    }
                  </>
                )
              }
            </Grid>
        }
      </>


    </Container>
  );
};

export default DashboardPage;
