import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from './../../assetes/logo.png';

const RegisterPage = () => {
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
            <form
            >
              <Box>
                <Grid container spacing={2} my={1}>
                  <Grid item md={6}>
                  <TextField fullWidth label="User Name" name="userName" placeholder="User Name" size="small" type="text" />
                  </Grid>
                  <Grid item md={6}>
                  <TextField fullWidth label="Email" name="email" placeholder="Email" size="small" type="email" />
                  </Grid>
                  <Grid item md={6}>
                  <TextField fullWidth label="Password" name="password" placeholder="Password" size="small" type="password" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField size="small" fullWidth name="rePassword" placeholder='Re Password' label="Re Password" type="password" />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth={true} sx={{ margin: "10px 0" }}>
                  Register
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
            </form>
          </Box>
        </Stack>
      </Container>
    );
};

export default RegisterPage;