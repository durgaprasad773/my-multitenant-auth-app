import { useState } from 'react';
import { loginUser } from '../../api/auth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await loginUser(email, password);
    if (error) {
      console.error('Login error:', error);
    } else {
      console.log('Login successful. User:', user);
      // Redirect to dashboard or handle authentication state
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
