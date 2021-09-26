import React, { useState } from 'react';
import { IUser } from '../services/users';
import { login as authLogin } from '../services/auth';
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  // Link,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link, Redirect } from 'react-router-dom';

export const SigninPage: React.FC = () => {
  const [logined, setLogined] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const login = data.get('login');
    const password = data.get('password');

    authLogin({ login, password } as IUser)
      .then(() => setLogined(true))
      .catch(console.error);
  };

  const renderPage = () => (
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
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">"Don't have an account? Sign Up"</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );

  return logined ? <Redirect to="/" /> : renderPage();
};
