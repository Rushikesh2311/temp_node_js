const fs = require('fs');

const firstPath = './content/first.txt';
const secondPath = './content/second.txt';

// Use try-catch block to handle errors
try {
  const firstContent = fs.readFileSync(firstPath, 'utf8');
  const secondContent = fs.readFileSync(secondPath, 'utf8');

  const resultPath = 'content/result_sync.txt';
  const resultContent = `Here is the result: ${firstContent}, ${secondContent}`;

  fs.writeFileSync(resultPath, resultContent);
  console.log('Files successfully read and result written.');
} catch (error) {
  console.error('Error:', error.message);
}
