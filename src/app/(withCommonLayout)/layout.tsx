import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import {Box} from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box>
            <Navbar>
                <Box sx={{minHeight: "90vh"}}>
                {children}
                </Box>
            </Navbar>
            <Footer />
        </Box>
    );
};

export default CommonLayout;