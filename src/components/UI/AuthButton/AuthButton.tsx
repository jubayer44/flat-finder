import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/authServices";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter();
    
    const handleLogout = () => {
        logoutUser(router);
        router.refresh();
    };

    return (
        <>
            {
                userInfo?.role ?
                    <Box component="div" sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        gap: "16px",
                        alignItems: { xs: "start", sm: "start", md: "center" },
                        justifyContent: "center"
                    }}>
                        <Typography component={Link} href="/dashboard">Profile</Typography>
                        <Button size="small" onClick={handleLogout} sx={{
                            backgroundColor: "#fc7676",
                            p: "4px 10px",
                            borderRadius: "5px",
                            color: "white",
                            width: "100%",
                            textAlign: "center"
                        }}>
                            Logout
                        </Button>
                    </Box> :
                    <Button size="small" component={Link} href="/login"  sx={{
                        backgroundColor: "#e3e577",
                        p: "4px 10px",
                        borderRadius: "5px",
                        color: "black",
                        width: "100%",
                        textAlign: "center"
                    }}>
                        Login
                    </Button>

            }
        </>
    )
};

export default AuthButton;