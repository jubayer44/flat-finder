import { TUserRole } from "@/types";
import drawerOptions from "@/utils/drawerOptions";
import { Box, Button, Divider, List, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import SidebarItems from "./SidebarItems";


const Sidebar = ({ handleDrawerClose }: any) => {


    
    return (
        <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" component={Link} href="/">
                <Image src={logo} height={40} width={40} alt='logo' />
                <Box sx={{ fontWeight: 600 }}>Flat<Box component="span" sx={{ color: "primary.main" }}>FInder</Box></Box>
            </Stack>


            <List>
                {(drawerOptions("admin" as TUserRole)?.flatsOptions as any)?.map((item: any, index: number) => (
                    <SidebarItems key={index} item={item} handleDrawerClose={handleDrawerClose} />
                ))}
            </List>
            <Divider />
            <List>
                {drawerOptions("admin" as TUserRole)?.accountOptions?.map((item, index) => (
                    <SidebarItems key={index} item={item} handleDrawerClose={handleDrawerClose} />
                ))}
                <Stack direction="row" justifyContent="center">
                    <Button size="small" fullWidth sx={{ backgroundColor: "#f70733", maxWidth: "200px", margin: "10px auto" }}>Logout</Button>
                </Stack>
            </List>
        </Box>
    )
};

export default Sidebar;