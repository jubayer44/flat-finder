import FlatCard from '@/components/UI/HomePage/FlatListSection/FlatCard';
import { TFlat } from '@/types/flat';
import { Container, Grid, Typography } from '@mui/material';

const AllFlatsPage = async ({ searchParams }: any) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/flats?limit=200`, {
        next: {
            revalidate: 30,
        },
    });

    const flats = await res.json();

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
            {/* <PaginationControlled totalPages={flats?.totalPages || 10} /> */}
        </Container>
    );
};

export default AllFlatsPage;
