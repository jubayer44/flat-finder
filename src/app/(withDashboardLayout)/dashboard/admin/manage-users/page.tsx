import { Container, Typography } from "@mui/material";
import ManageUsers from "./components/ManageUsers";

const ManageUsersPage = () => {
    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>Manage Users</Typography>
            <ManageUsers/>
        </Container>
    )
};

export default ManageUsersPage;