"use client";
import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Typography,  Stack } from '@mui/material';
import Image from 'next/image';
import BedIcon from '@mui/icons-material/Bed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { FieldValues } from 'react-hook-form';
import FlatForm from '@/components/Forms/FlatForm';
import FlatInput from '@/components/Forms/FlatInput';
import { TFlat, TFlatShareRequest } from '@/types';
import { useAddFlatShareRequestMutation } from '@/redux/api/flatShareRequestApi';
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { toast } from 'sonner';

const FlatShareRequest = ({ flatDetails }: { flatDetails: TFlat }) => {
    const [agreed, setAgreed] = useState<boolean>(false);
    const [addFlatShareRequest, {isLoading}] = useAddFlatShareRequestMutation();
    const {data, isLoading: userLoading} = useGetMyProfileQuery({});

    const user = data?.data;

    const handleSubmit = async (values: FieldValues) => {
        try {
            const requestData = {
                flatId: flatDetails?.id,
                message: values?.message
            };
        const res: TFlatShareRequest | any = await addFlatShareRequest(requestData);
            if(res?.data?.success){
                toast.success(res?.data?.message)
            } else {
            toast.error("Something went wrong!")
            }
        }
        catch (err: any) {
            console.log("error", err)
            toast.error(err)
        }
    };

    const defaultValues = {
        email: user?.email || "email",
        username: user?.username || "username",
        message: ""
    };

    return (
        <>
            <Image height={400} width={700} src={flatDetails?.photos[0]} alt="Photo" style={{ maxWidth: '100%', marginBottom: '10px' }} />

            <Stack direction="row" spacing={2} justifyContent="space-between" my={2}>
                <Box>
                    <Typography component="p" fontWeight={600} gutterBottom>
                        <AttachMoneyIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        Rent Amount
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                        {flatDetails?.rentAmount}
                    </Typography>
                </Box>

                <Box>
                    <Typography component="p" fontWeight={600} gutterBottom>
                        <BedIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        Bedrooms
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                        {flatDetails?.bedrooms}
                    </Typography>
                </Box>
            </Stack>

           {
                userLoading ? <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Loading...</Typography> : 
                <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
            >
                <Stack direction="column" gap={2}>
                    <FlatInput
                        name="email"
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
                                onChange={() => setAgreed(!agreed)}
                            />
                        }
                        label="I agree to the terms and conditions"
                    />

                    <Button disabled={!agreed || isLoading} type="submit" variant="contained" size="small" fullWidth sx={{ mt: 2 }}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </Stack>
            </FlatForm>
           }
        </>
    );
};

export default FlatShareRequest;
