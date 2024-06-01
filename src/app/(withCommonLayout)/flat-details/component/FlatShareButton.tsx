"use client";
import {Button} from '@mui/material';
import Link from 'next/link';
import {getUserInfo} from '@/services/authServices';

const FlatShareButton = ({id}: {id: string}) => {
    const user = getUserInfo();
    return (
        <Button component={Link} fullWidth variant="contained" color="primary" href={`/dashboard/${user?.role || "user"}/flat-share-request/${id}`} style={{ marginTop: '20px' }}>
            Flat Share Request
        </Button>
    )
};

export default FlatShareButton;