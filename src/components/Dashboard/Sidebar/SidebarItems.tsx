import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

type TProps = {
  item: any;
  handleDrawerClose: any;
}

const SidebarItems = ({ item, handleDrawerClose }: TProps) => {
  const router = useRouter();
  let pathname = usePathname();
  const linkPath = `/dashboard/${item?.path}`;

  if(pathname === "/dashboard") {
    pathname = pathname + "/"
  };

  const handleClick = () => {
    handleDrawerClose()
    router.push(linkPath)
  }

  return (
    <Box onClick={handleClick}>
      <ListItem disablePadding sx={{
        mb: 1,
        ...((pathname) === linkPath ? {
          borderRight: "3px solid #1586FD",
          "& svg": {
            color: "#1586FD"
          }
        } : {})
      }}>
        <ListItemButton>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item?.title} />
        </ListItemButton>
      </ListItem>
    </Box>
  )
};

export default SidebarItems;