import { Container, Typography } from "@mui/material";
import ViewAllFlats from "./components/ViewAllFlats";

const ViewAllFlatsPage = () => {
    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>View All Flats</Typography>
            <ViewAllFlats/>
        </Container>
    )
};

export default ViewAllFlatsPage;