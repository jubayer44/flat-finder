"use client";
import {Button, Container} from '@mui/material';
import Link from 'next/link';
import {getUserInfo} from '@/services/authServices';

const FlatShareButton = ({id}: {id: string}) => {
    const user = getUserInfo();
    return (
        <Container maxWidth="lg">
            <Button component={Link} fullWidth variant="contained" color="primary" href={`/dashboard/${user?.role || "user"}/flat-share-request/${id}`} style={{ marginTop: '20px' }}>
            Flat Share Request
        </Button>
        </Container>
    )
};

export default FlatShareButton;