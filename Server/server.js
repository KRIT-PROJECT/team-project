const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer();
const filePath = path.join(__dirname, 'form-data.xlsx');

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to write to Excel file with retries
function writeFileWithRetries(filePath, workbook, retries = 5, delay = 500) {
  return new Promise((resolve, reject) => {
    const tryWriting = (attempt) => {
      try {
        XLSX.writeFile(workbook, filePath);  // Try writing the file
        resolve();  // Success
      } catch (error) {
        if (error.code === 'EBUSY' && attempt < retries) {
          console.log(`File is busy. Retrying attempt ${attempt + 1} of ${retries}...`);
          setTimeout(() => tryWriting(attempt + 1), delay);  // Retry if file is busy
        } else {
          reject(error);  // Fail after max retries
        }
      }
    };
    tryWriting(0);  // Start the first attempt
  });
}

// Handle form submission
app.post('/submit-form', upload.none(), async (req, res) => {
  // Log the form data for debugging
  console.log('Form Data Received:', req.body);

  const { Name, Email, Phone, Course, Role } = req.body;

  // Check if all fields are provided
  if (!Name || !Email || !Phone || !Course || !Role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  let workbook;
  if (fs.existsSync(filePath)) {
    // If file exists, read it
    workbook = XLSX.readFile(filePath);
  } else {
    // If file doesn't exist, create a new workbook
    workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet([]);  // Initialize an empty sheet
    XLSX.utils.book_append_sheet(workbook, sheet, 'Form Responses');
  }

  const sheet = workbook.Sheets['Form Responses'];
  const data = XLSX.utils.sheet_to_json(sheet);  // Convert sheet data to JSON

  // Add new form entry
  const newEntry = {
    Name,
    Email,
    Phone,
    Course,
    Role,
  };

  data.push(newEntry);  // Add new entry to the data array
  const updatedSheet = XLSX.utils.json_to_sheet(data);  // Convert data back to sheet

  // Update the sheet in the workbook
  workbook.Sheets['Form Responses'] = updatedSheet;

  try {
    // Write updated workbook to file
    await writeFileWithRetries(filePath, workbook);
    res.json({ result: 'success' });  // Respond with success
  } catch (error) {
    console.error('Error writing to file:', error);
    res.status(500).json({ error: 'Error writing file' });
  }
});

// Handle view data
app.get('/view-data', (req, res) => {
  if (fs.existsSync(filePath)) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = 'Form Responses';
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);  // Send data as JSON
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
