import { Box, Typography } from '@mui/material';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => (
  <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
    <Typography variant="h4" gutterBottom>
      Login
    </Typography>
    <LoginForm />
  </Box>
);

export default LoginPage;