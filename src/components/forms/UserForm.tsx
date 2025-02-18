import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { User } from '../../types/user';

interface UserFormProps {
  onSubmit: (data: User) => void;
  initialData?: User;
}

const UserForm = ({ onSubmit, initialData }: UserFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialData || {
      name: '',
      email: '',
      age: 18,
      address: {
        street: '',
        city: '',
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* 基础字段 */}
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        {/* 嵌套对象 */}
        <Grid item xs={6}>
          <Controller
            name="address.street"
            control={control}
            rules={{ required: 'Street is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Street"
                error={!!errors.address?.street}
                helperText={errors.address?.street?.message}
              />
            )}
          />
        </Grid>

        {/* 下拉选择 */}
        <Grid item xs={6}>
          <Controller
            name="age"
            control={control}
            rules={{
              required: 'Age is required',
              min: { value: 18, message: 'Minimum age is 18' },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                label="Age"
                error={!!errors.age}
                helperText={errors.age?.message}
              >
                {[18, 19, 20, 21, 22, 23, 24, 25].map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        {/* 提交按钮 */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;