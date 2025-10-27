const fs = require('fs');
const path = 'data';
const filePath = `${path}/rhc-storybook.json`;
const https = require('https');
const url = 'https://rijkshuisstijl-community.vercel.app/index.json';

// Ensure the folder exists
if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}

// Download JSON and save it
https
  .get(url, (res) => {
    let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
      try {
        const json = JSON.parse(data); // Validate JSON
        fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
        console.log(`✅ Saved to ${filePath}`);
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    });
  })
  .on('error', (err) => {
    console.error('Error downloading file:', err);
  });
