import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // هيك بمنع انه يسير  إعادة تحميل لل صفحة
    setGreeting(`HI !! ${name}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <label>
         Enter your name:
          <input 
            type="text" 
            value={name} 
            onChange={handleChange} 
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default GreetingForm;
