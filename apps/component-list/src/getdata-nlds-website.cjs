const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const folder = 'data';

// URL to scrape
const url = 'https://nldesignsystem.nl/componenten/';

// Function to fetch and parse website content
async function fetchWebsiteContent() {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      timeout: 10000,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    process.exit(1);
  }
}

// Function to extract components from HTML
function extractComponents(html) {
  const $ = cheerio.load(html);
  const components = [];

  // Find all elements with class 'component-card__title'
  $('.component-card__title').each((index, element) => {
    const title = $(element).text().trim();
    // Find the closest 'utrecht-badge-data' within the same component card
    // Assuming the badge is a sibling or within a nearby container
    const badgeElement = $(element).closest('.component-card').find('.estafette-badge');
    const badge = badgeElement.length > 0 ? badgeElement.text().trim() : 'Unknown';

    components.push({ title, badge });
  });

  return components;
}

// Function to save components to JSON file
function saveToJson(components, outputPath) {
  try {
    // Create folder if it doesn't exist
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    const jsonContent = JSON.stringify(components, null, 2);
    fs.writeFileSync(outputPath, jsonContent);
    console.log(`✅ Saved to ${outputPath}`);
  } catch (error) {
    console.error('Error saving JSON file:', error.message);
    process.exit(1);
  }
}

// Main function
async function main() {
  // Output file path
  const outputPath = path.join(__dirname, `../${folder}/nlds-website.json`);

  // Fetch website content
  const html = await fetchWebsiteContent();

  // Check for verification page
  if (html.includes('Please wait while your request is being verified')) {
    console.error('Verification page detected. Try again later or use a headless browser.');
    process.exit(1);
  }

  // Extract components
  const components = extractComponents(html);

  // Validate components
  if (components.length === 0) {
    console.error('No components found on the page.');
    process.exit(1);
  }

  // Save to JSON
  saveToJson(components, outputPath);
}

// Run the script
main();
