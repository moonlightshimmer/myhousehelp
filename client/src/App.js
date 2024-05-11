import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Fetch call setup...
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: 1, backgroundImage: 'url("/images/Indian_dishes.jpg")', backgroundSize: 'cover' }} />
      <div style={{ flex: 1, backgroundColor: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', fontSize: '16px' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', fontSize: '16px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
            <button type="button" onClick={() => setRole('user')} style={{ flex: 1, padding: '10px', border: role === 'user' ? '2px solid blue' : '1px solid grey' }}>I want a cook</button>
            <button type="button" onClick={() => setRole('cook')} style={{ flex: 1, padding: '10px', border: role === 'cook' ? '2px solid blue' : '1px solid grey' }}>I am cooking meals</button>
          </div>
          <button type="submit" style={{ padding: '10px 0', fontSize: '18px' }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
