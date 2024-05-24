import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";


const SidebarItems = ({ item }: any) => {
  let pathname = usePathname();
  const linkPath = `/dashboard/${item?.path}`;

  if(pathname === "/dashboard") {
    pathname = pathname + "/"
  }

  return (
    <Link href={linkPath}>
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
    </Link>
  )
};

export default SidebarItems;