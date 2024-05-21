import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#15b36a"
        },
        secondary: {
            main: "#f50057"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained"
            },
            styleOverrides: {
                root: {
                    padding: "8px 24px",
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        }
    },
    typography: {
        body1: {
            color: "rgba(0, 0, 0, 0.87)"
        }
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";