import * as packageJson from './modules/package-json';

// if(typeof packageJson === 'function') {
  packageJson('ava').then(json => {
    console.log(json);
  });
// } else {
//   console.log('error');
//   console.log(typeof packageJson);
//   console.log(packageJson);
// }
