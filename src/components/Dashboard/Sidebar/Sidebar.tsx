import { TUserRole } from "@/types";
import drawerOptions from "@/utils/drawerOptions";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assetes/logo.png";
import SidebarItems from "./SidebarItems";


const Sidebar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Image src={logo} height={40} width={40} alt='logo' />
        <Box sx={{ fontWeight: 600 }}>Flat<Box component="span" sx={{ color: "primary.main" }}>FInder</Box></Box>
      </Stack>


      <List>
        {(drawerOptions("user" as TUserRole)?.flatsOptions as any)?.map((item: any, index: number) => (
            <SidebarItems key={index} item={item}/>
        ))}
      </List>
      <Divider />
      <List>
        {drawerOptions("user" as TUserRole)?.accountOptions?.map((item, index) => (
          <Link href={item.path} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item?.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Stack direction="row" justifyContent="center">
          <Button size="small" fullWidth sx={{ backgroundColor: "#f70733", maxWidth: "200px", margin: "10px auto" }}>Logout</Button>
        </Stack>
      </List>
    </Box>
  )
};

export default Sidebar;