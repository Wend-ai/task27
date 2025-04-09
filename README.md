Back-End Setup
1. Create the API Endpoint
File: back-end/index.js

js
Copy
Edit
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Custom API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the custom back-end endpoint!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
2. Install Dependencies
In the back-end folder:

bash
Copy
Edit
npm init -y
npm install express cors
3. Start the Back-End Server
bash
Copy
Edit
node index.js
💻 Front-End Setup
1. Fetch the Message from Back End
File: front-end/src/App.jsx

jsx
Copy
Edit
import { useEffect, useState } from 'react';

function App() {
  const [customMessage, setCustomMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then(res => res.json())
      .then(data => setCustomMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Original Message: Welcome to the App</h1>
      <h2>Custom Message: {customMessage}</h2>
    </div>
  );
}

export default App;
2. Install Front-End Dependencies
In the front-end folder:

bash
Copy
Edit
npm install
3. Start the Front-End Server
bash
Copy
Edit
npm run dev
✅ Tip: If using Vite, make sure your app runs at http://localhost:5173. If using another setup (like CRA), adjust accordingly.

🧪 Test the Application
Make sure both servers are running:

Back end: http://localhost:3000

Front end: http://localhost:5173

Open the app in your browser:

arduino
Copy
Edit
http://localhost:5173
You should see:

Original Message: loading original message

Custom Message: Hello from the frontend....
