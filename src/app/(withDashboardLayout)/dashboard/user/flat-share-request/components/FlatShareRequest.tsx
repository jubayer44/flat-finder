"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Container, Stack } from '@mui/material';
import Image from 'next/image';
import BedIcon from '@mui/icons-material/Bed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { FieldValues } from 'react-hook-form';
import FlatForm from '@/components/Forms/FlatForm';
import FlatInput from '@/components/Forms/FlatInput';

const FlatShareRequest = () => {
    const [agreed, setAgreed] = useState<boolean>(false);

    const user = { contactInfo: 'user@example.com' };

    const handleSubmit = (values: FieldValues) => {
        console.log(values);
    };

    const handleAgreementChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAgreed(event.target.checked);
    };

    const defaultValues = {
        email: "jack@gmail.com",
        username: "jack44",
        message: ""
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>
                    Flat Share Request
                </Typography>

                <Image height={400} width={700} src="https://www.mynicehome.gov.sg/wp-content/uploads/2-Room-Flex-Flat-Design-Ideas-Cover.png" alt="Photo" style={{ maxWidth: '100%', marginBottom: '10px' }} />

                <Stack direction="row" spacing={2} justifyContent="space-between" my={2}>
                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <AttachMoneyIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Rent Amount
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                            5000
                        </Typography>
                    </Box>

                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <BedIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Bedrooms
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                            5
                        </Typography>
                    </Box>
                </Stack>

                <FlatForm
                    onSubmit={handleSubmit}
                    defaultValues={defaultValues}
                >
                    <Stack direction="column" gap={2}>
                    <FlatInput
                        name="email"
                        label="Your Email"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <FlatInput
                        name="username"
                        label="Your Username"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <FlatInput
                        name="message"
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agreed}
                                onChange={()=> setAgreed(!agreed)}
                            />
                        }
                        label="I agree to the terms and conditions"
                    />

                    <Button disabled={!agreed} type="submit" variant="contained" size="small" fullWidth sx={{ mt: 2 }}>
                        Submit
                    </Button>
                    </Stack>
                </FlatForm>
            </Box>
        </Container>
    );
};

export default FlatShareRequest;
