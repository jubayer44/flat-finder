import FlatCard from '@/components/UI/HomePage/FlatListSection/FlatCard';
import { TFlat } from '@/types/flat';
import { Container, Grid, Typography } from '@mui/material';

const SearchResultPage = async ({ searchParams, queryParams }: any) => {

    const searchTerm = searchParams?.location;
    const bedrooms = searchParams?.bedrooms;
    const minPrice = searchParams?.minPrice;
    const maxPrice = searchParams?.maxPrice;

    const url2 = `${searchTerm ? `&searchTerm=${searchTerm}` : ""}${bedrooms ? `&bedrooms=${bedrooms}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}${maxPrice ? `&maxPrice=${maxPrice}` : ""}`

    const url = `${process.env.NEXT_PUBLIC_URL}/flats?limit=200&${url2}`

    const res = await fetch(url, {
        cache: "no-store",
    });

    const flats = await res.json();

    console.log(flats)

    return (
        <Container>
            <Typography variant='h4' component="h2" sx={{ my: 2, textAlign: "center", fontWeight: 600 }}>{flats?.data?.length ? "Search Result" : "No Result Found"}</Typography>
            <Grid container spacing={2}>
                {flats?.data?.map((flat: TFlat) => (
                    <Grid item key={flat?.id} xs={12} sm={6} md={4}>
                        <FlatCard flat={flat} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchResultPage;
