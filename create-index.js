// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
const fs = require('fs');

const initialFile = `
export { default as createValidator } from './utils/createValidator';
export { default as Response } from './utils/ResponseMonad';
`;

const getIndexContent = (cb) => glob('src/*.js', (err, files) => {
  if (err) {
    throw err;
  }
  const names = files.map((filePath) => filePath.replace(/src\//, '').replace(/.js/, ''));

  cb(names.reduce((acc, current) => {
    // eslint-disable-next-line no-param-reassign
    acc += `export { default as ${current} } from './${current}';\n`;

    return acc;
  }, initialFile));
});


const writeFile = (fileContent) => fs.writeFile('src/index.js', fileContent, { flag: 'w' }, (err) => {
  if (err) {
    throw err;
  }

  console.log('The index.js file was saved!');
});

getIndexContent(writeFile);
