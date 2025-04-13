import React, { useState } from 'react';

function FormUseState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <input 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
      {/* Display area that updates dynamically as user types */}
      <div style={{ marginTop: '10px' }}>
        {(name || email) && (
          <>
            <p><strong>Live Preview:</strong></p>
            {name && <p>Name: {name}</p>}
            {email && <p>Email: {email}</p>}
          </>
        )}
      </div>
    </>
  );
}

export default FormUseState;