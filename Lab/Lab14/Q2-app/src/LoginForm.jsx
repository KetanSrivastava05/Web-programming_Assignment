import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    city: '',
    server: '',
    role: '',
    signOn: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        signOn: checked
          ? [...prevState.signOn, value]
          : prevState.signOn.filter((item) => item !== value)
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      city: '',
      server: '',
      role: '',
      signOn: []
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Novell Services Login - 23BCE1216</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} /><br />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />

        <label>City of Employment:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} /><br />

        <label>Web server:</label>
        <select name="server" value={formData.server} onChange={handleChange}>
          <option value="">-- Choose a server --</option>
          <option value="server1">Server 1</option>
          <option value="server2">Server 2</option>
        </select><br />

        <p>Please specify your role:</p>
        <input type="radio" name="role" value="Admin" onChange={handleChange} /> Admin<br />
        <input type="radio" name="role" value="Engineer" onChange={handleChange} /> Engineer<br />
        <input type="radio" name="role" value="Manager" onChange={handleChange} /> Manager<br />
        <input type="radio" name="role" value="Guest" onChange={handleChange} /> Guest<br />

        <p>Single Sign-on to the following:</p>
        <input type="checkbox" name="signOn" value="Mail" onChange={handleChange} /> Mail<br />
        <input type="checkbox" name="signOn" value="Payroll" onChange={handleChange} /> Payroll<br />
        <input type="checkbox" name="signOn" value="Self-service" onChange={handleChange} /> Self-service<br />

        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default LoginForm;
