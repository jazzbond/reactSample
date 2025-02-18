import { useState } from 'react';
import { userApi } from '../services/api';
import UserForm from '../components/forms/UserForm';
import { Box, Typography } from '@mui/material';
import { User } from '../types/user';

const UserPage = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (userData: User) => {
    try {
      const response = userData.id 
        ? await userApi.updateUser(userData.id, userData)
        : await userApi.createUser(userData);
      
      console.log('User saved:', response.data);
      setSubmitError(null);
    } catch (error) {
      setSubmitError('Failed to save user. Please try again.');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      
      {submitError && (
        <Typography color="error" sx={{ mb: 2 }}>
          {submitError}
        </Typography>
      )}

      <UserForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default UserPage;