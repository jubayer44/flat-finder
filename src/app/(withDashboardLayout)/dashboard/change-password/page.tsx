import { Container, Typography } from "@mui/material";
import ChangePassword from './components/ChangePassword';

const ChangePasswordPage = () => {

    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>Change Password</Typography>
             <ChangePassword/>
        </Container>
    )
};

export default ChangePasswordPage;