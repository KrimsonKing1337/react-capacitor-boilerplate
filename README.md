## React Capacitor Boilerplate

### To run vite in dev mode, run:
```
npm run start
```

### To build:
```
npm run build
```

### To build android apk:
```
npm run build:android
```

### To open android apk dir:
```
npm run open:apkdir
```

### To open project in android studio, run:
```
npx cap open android
```

Then use Android Studio to run application.\
Because this command runs with errors for now:
```
npx cap run android
```

If Android Studio says that Emulator is offline, do this (Windows):
```
adb kill-server
taskkill /F /IM adb.exe
adb start-server
adb devices -l
```

