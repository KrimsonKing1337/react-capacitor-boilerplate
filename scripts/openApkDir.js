import os from 'os';
import openExplorer from 'open-file-explorer';

const path = 'android/app/build/outputs/apk/debug';

let safePath = path;

if (os.platform() === 'win32') {
  safePath = path.replaceAll(/\//g, '\\');
}

console.log(safePath);

openExplorer(safePath, (err) => {
  if (err) {
    console.log('openExplorer error:', err);
  }
});
