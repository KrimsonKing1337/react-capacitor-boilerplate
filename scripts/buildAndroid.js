import { spawnSync } from 'child_process';

import os from 'os';

const command = 'npx cap copy android && cd android && gradlew.bat assembleDebug';

let safeCommand = command;

if (os.platform() !== 'win32') {
  safeCommand = command.replace('gradlew.bat', 'gradlew');
}

spawnSync(safeCommand, { shell: true, stdio: 'inherit' });
