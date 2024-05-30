"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/material';
import Image from 'next/image';
import logo from './../../../assets/logo.png';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface Props {
    window?: () => Window;
    children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = [
    {
    text: "Home",
    path: "/"
    },
    {
    text: "About Us",
    path: "/about-us"
    },
    {
    text: "auth",
    path: "/"
    },
];

export default function Navbar(props: Props) {
    const AuthButton = dynamic(()=> import('@/components/UI/AuthButton/AuthButton'), {ssr: false})
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Container>
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Stack component={Link} href="/" direction="row" py={1} spacing="4px" alignItems="center">
                    <Image src={logo} alt="logo" height={40} width={40} />
                    <Box>Flat<Box component="span" sx={{ color: "primary.main" }}>FInder</Box></Box>
                </Stack>
                <Divider />
                <List>
                    {navItems.map((item, i) => (
                        <ListItem key={i} disablePadding>
                            <ListItemButton>
                                {item.text !== "auth" ? <Link href={item.path}>{item.text}</Link> : <AuthButton/>}
                                
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Container>
            <Box sx={{ display: 'flex', background: "rgb(255, 255, 255)" }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ background: "rgb(255, 255, 255)", padding: "0 20px" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Stack component={Link} href="/" direction="row" spacing="4px" alignItems="center">
                                <Image src={logo} alt="logo" height={40} width={40} />
                                <Box>Flat<Box component="span" sx={{ color: "primary.main" }}>FInder</Box></Box>
                            </Stack>
                        </Typography>
                        <Stack direction="row" spacing={3} alignItems="center">
                            {
                                navItems.map((item, i) => (
                                    <Box key={i} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        {item.text !== "auth" ? <Typography component={Link} href={item.path}>{item.text}</Typography> : <AuthButton/>}
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Container component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    {props.children}
                </Container>
            </Box>
        </Container>
    );
}
