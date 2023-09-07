import { Avatar, Box, Button, Checkbox, Container,
         CssBaseline, FormControlLabel, Grid, Link, 
         TextField, ThemeProvider, Typography, createTheme 
        } from "@mui/material";
import styles from "./index.module.scss";
import { useFormik } from "formik";
import * as yup from 'yup';
import LoginApi from "../../api/loginApi";
import { useNavigate } from "react-router";
const defaultTheme = createTheme();
const validationSchema = yup.object({
    email: yup
        .string('Please enter your Email')
        .required('Email code is required'),
    password: yup
        .string('Please enter Password')
        .required('Password is required'),
});
const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await handleLogin({
                email:values.email,
                password:values.password
            })
            formik.resetForm();
        }
       
    });
    const handleLogin = async({email,password})=>{
            try{
                const response = await LoginApi.PostApi({email, password});
                const { accessToken, refreshToken } = response.data.token;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                navigate("/admin")
            }catch(erorr){

            }

    }
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        
                        </Avatar>
                        <Typography component="h1" variant="h5">
                           Login
                        </Typography>
                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"                          
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                className={styles.inputLogin}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                className={styles.inputLogin}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                  
                </Container>
            </ThemeProvider>
        </>
    )
};
export default Login