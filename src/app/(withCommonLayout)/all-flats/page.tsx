import FlatCard from '@/components/UI/HomePage/FlatListSection/FlatCard';
import { TFlat } from '@/types/flat';
import { Container, Grid, Typography, Box } from '@mui/material';
import PaginationControlled from './components/Pagination';

const AllFlatsPage = async ({ searchParams }: any) => {

    const page = searchParams?.page || 1;

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/flats?limit=6&page=${page}`, {
        next: {
            revalidate: 30,
        },
    });

    const flats = await res.json();

    const totalPages = Math.ceil(flats.meta.total / 6)

    return (
        <Container>
            <Typography variant='h4' component="h2" sx={{ my: 2, textAlign: "center", fontWeight: 600 }}>All Flats</Typography>
            <Grid container spacing={2}>
                {flats?.data?.map((flat: TFlat) => (
                    <Grid item key={flat?.id} xs={12} sm={6} md={4}>
                        <FlatCard flat={flat} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{margin: "15px 0", display: "flex", justifyContent: "center"}}>
            <PaginationControlled totalPages={totalPages} />
            </Box>
        </Container>
    );
};

export default AllFlatsPage;
