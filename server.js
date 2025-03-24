const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the website folder
app.use(express.static(path.join(__dirname, 'public')));

// GitHub Webhook listener
app.post('/webhook', (req, res) => {
  console.log('Received a webhook');
  const exec = require('child_process').exec;
  exec('git pull origin main', { cwd: path.join(__dirname, 'public') }, (err, stdout, stderr) => {
    if (err) {
      console.log(`Error: ${stderr}`);
      return res.status(500).send('Error pulling updates');
    }
    console.log(stdout);
    res.status(200).send('Website updated');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
