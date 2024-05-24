"use client"
import FlatForm from '@/components/Forms/FlatForm';
import FlatInput from '@/components/Forms/FlatInput';
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import logo from './../../../assetes/logo.png';


const validationSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginComponent = () => {

  const handleSubmit = (values: FieldValues) => {
    console.log(values)
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
                Login
              </Typography>
            </Box>
          </Stack>
          {/* {error && (
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
            )} */}
          <FlatForm
            onSubmit={handleSubmit}
            defaultValues={{ email: "", password: "" }}
            resolver={zodResolver(validationSchema)}
          >
            <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <FlatInput label="Email" name="email" placeholder="Email" type="email" />
                </Grid>
                <Grid item md={6}>
                  <FlatInput name="password" label="Password" placeholder='Password' type="password" />
                </Grid>
              </Grid>
              <Typography
                component="p"
                fontSize={14}
                fontWeight={300}
                textAlign="right"
              >
                Forgat Password
              </Typography>
              <Button type="submit" fullWidth={true} sx={{ margin: "10px 0" }}>
                Login
              </Button>
              <Typography
                component="p"
                fontSize={18}
                fontWeight={300}
                sx={{ textAlign: "center" }}
              >
                Don&apos;t have an account?{" "}
                <Link href="/register" color="blue">
                  Register
                </Link>
              </Typography>
            </Box>
          </FlatForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginComponent;