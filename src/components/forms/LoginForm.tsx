import { useForm } from 'react-hook-form';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { LoginFormData } from '../../types/user';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError('');
    try {
      const response = await login(data);
      if (response.data.success) {
        navigate('/user');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        {...register('email', {
          required: 'Required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        {...register('password', { required: 'Required', minLength: 6 })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {error && (
        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
      )}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
        sx={{ mt: 3 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Sign In'}
      </Button>
    </Box>
  );
};

export default LoginForm;