const path = require('path');
const fs = require('fs');
const files = ['.bash_profile', 'hkhhkh', '.npmrc'];
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);

  } catch (err) {
    console.log('File not Found');
  }
});
// File data is....
// File not Found
// File data is....

// IF LIKE AS BELOW
//....
const path = require('path');
const fs = require('fs');
const files = ['.bash_profile', 'hkhhkh', '.npmrc'];
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath, 'hkhhygfd');
    console.log('File data is', data);

  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not Found');
    } else {
      throw err;
    }
  }
//Error..