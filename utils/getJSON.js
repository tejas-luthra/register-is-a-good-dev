const fs = require('fs');
const { getFileExtension } = require('./utils.js');

function getJSON(file, filename) {
  const path = `${process.env.actions_path}/${file}`; // File path.
  const ext = getFileExtension(file);
  if (file.includes("sub-logs") && !ext | ext != "json") return 3;
  if (!ext) return false; // If no file extension, return.
  if (ext != 'json') return false; // If file extension is not '.json' return.
  
  try {
    if (fs.existsSync(path)) { // Check if file exists in domain directory
      // It exists
      const rawdata = fs.readFileSync(path); // Read the file
      const data = JSON.parse(rawdata); // Parse it
      return data; // Return true or false, depending if tests pass or fail.
    }

    return 3; // It doesn't exist
  } catch(err) {
    console.error(err);
  }

  return 3;
}

module.exports = getJSON; 
