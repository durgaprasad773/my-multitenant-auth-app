
import { useState } from 'react';
import { registerUser } from '../../api/auth';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    const { user, error } = await registerUser(email, password);
    if (error) {
      console.error('Registration error:', error);
    } else {
      console.log('Registration successful. User:', user);
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default RegistrationForm;
