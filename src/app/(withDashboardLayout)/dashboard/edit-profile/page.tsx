import { Container, Typography } from "@mui/material";
import EditProfile from './components/EditProfile';

const EditProfilePage = () => {

    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>Edit Profile</Typography>
             <EditProfile/>
        </Container>
    )
};

export default EditProfilePage;