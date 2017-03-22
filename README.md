# wayland-student-planner
A planner/school assistant for Wayland High School.

## Up and Running
Getting Wayland Student Planner up and running on your system is easy, just make sure you have Git, Python, and Node.js installed.

```bash
# Clone this repository
git clone https://github.com/andrewward2001/wayland-student-planner
# Go into the repository
cd wayland-student-planner
# Install dependencies
npm install
# Run the app
npm start
```

If you did everything correctly, you should have a working copy regardless of your operating system.

## Building
Building is pretty easy as well, just keep in mind that you can only build for the platform you're using.
#### Windows:
Building for Windows is as easy as
```bash
npm run dist
```
Keep in mind that this will build a 64-bit version only.

#### macOS:
Building for Mac is just as easy:
```bash
npm run distM
```

#### Linux:
I'm not currently supporting Linux builds as a built in script. See [electron-builder](https://github.com/electron-userland/electron-builder) to see how you can build for Linux yourself.
