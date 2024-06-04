"use client";
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from './../../../assets/logo.png';
import FlatForm from '@/components/Forms/FlatForm';
import { FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FlatInput from '@/components/Forms/FlatInput';
import registerUser from '@/services/actions/registerUser';
import { toast } from 'sonner';
import loginUser from '@/services/actions/loginUser';
import { useRouter } from 'next/navigation';
import { storeUser } from '@/services/authServices';
import { useState } from 'react';
import { useGetMyProfileQuery } from '@/redux/api/userApi';

const validationSchema = z
  .object({
    username: z.string({message: "User name is required"}),
    email: z.string().email("Email is required"),
    password: z.string().min(5, "Password must be at least 5 characters"),
    confirmPassword: z.string({message: "Confirm password is required"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], 
  });

const RegisterComponent = () => {
  const {refetch} = useGetMyProfileQuery({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

    const handleSubmit = async (values: FieldValues) => {
        try{
          setLoading(true);
          const userInfo = {
              username: values?.username,
              email: values?.email,
              password: values?.password
          }
          const data = await registerUser(userInfo);
          if(data?.success){
            refetch()
            setError("");
            const loginData = await loginUser({
              email: data?.data?.email,
              password: userInfo?.password
            });
            if(loginData?.success){
              router.refresh();
              refetch()
              storeUser({accessToken: loginData.data.accessToken} );
              toast.success("Register Successfully")
              setLoading(false)
            }
          } else {
            setError(data?.message);
            setLoading(false)
          }
        }
        catch(err: any){
          console.log(err?.message);
          setLoading(false)
          setError(err?.message);
        }
    }

    return (
        <Container>
        <Stack
          sx={{
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 500,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image src={logo} alt="" width={50} height={50} />
              </Box>
              <Box>
                <Typography variant="h4" mt={1} fontWeight={700}>
                  Register
                </Typography>
              </Box>
            </Stack>
            {error && (
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    my: 2,
                  }}
                >
                  {error}
                </Typography>
              </Box>
            )}
            <FlatForm
            onSubmit={handleSubmit}
            defaultValues={{username: "", email: "", password: "", confirmPassword: ""}}
            resolver={zodResolver(validationSchema)}
            >
              <Box>
                <Grid container spacing={2} my={1}>
                  <Grid item xs={12} sm={12} md={6}>
                  <FlatInput fullWidth label="User Name" name="username" placeholder="User Name" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                  <FlatInput fullWidth label="Email" name="email" placeholder="Email" type="email" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                  <FlatInput fullWidth label="Choose Password" name="password" placeholder="Password" type="password" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <FlatInput fullWidth name="confirmPassword" placeholder='Password' label="Confirm Password" type="password" />
                  </Grid>
                </Grid>
                <Button type="submit" disabled={loading} fullWidth={true} sx={{ margin: "10px 0" }}>
                  {loading ? "Loading..." : "Register"}
                </Button>
                <Typography
                  component="p"
                  fontSize={18}
                  fontWeight={300}
                  sx={{ textAlign: "center" }}
                >
                  Already have an account?{" "}
                  <Link href="/login" color="blue">
                    Login
                  </Link>
                </Typography>
              </Box>
            </FlatForm>
          </Box>
        </Stack>
      </Container>
    );
};

export default RegisterComponent;