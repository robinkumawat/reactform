import React, { useRef, useState } from 'react';

function App() {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const gender = genderInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone = phoneInputRef.current.value;

    const formData = {
      firstName,
      lastName,
      gender,
      email,
      phone,
    };

    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" ref={firstNameInputRef} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" ref={lastNameInputRef} required />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" ref={genderInputRef} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" ref={phoneInputRef} required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone Number: {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
}

export default App;

