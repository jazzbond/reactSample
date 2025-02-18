import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/user">User</Button>
      </Toolbar>
    </AppBar>

    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Container>
  </>
);

export default App;