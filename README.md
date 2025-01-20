# WebGL Game

This repository contains a WebGL game powered by a Node.js server. The game assets are compressed using Gzip for optimized performance. Follow the instructions below to set up and run the game locally.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- A modern web browser (e.g., Chrome, Firefox, Edge) that supports WebGL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deyaa22/locally-running-webgl-game
   cd locally-running-webgl-game
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

   > Note: Replace `3000` with the port number specified in your `server.js` file if different.

## Project Structure

- `server.js`: The main server script.
- `Game-Build/`: Contains static assets for the game (e.g., HTML, CSS, JavaScript, textures, models).
- `node_modules/`: Appears after Node.js dependencies get Installed.
- `package.json`: Project metadata and dependencies.

## Troubleshooting

- Ensure the port used in `server.js` is not already in use. If needed, change the port in the script and restart the server.
- If the game doesn't load, check the browser console for errors, if an issue appears, create issue.
- Verify that your server correctly serves Gzipped files, the server sets Content-Encoding headers for gzip files.
- 
## License

This project is licensed under the [MIT License](LICENSE).

## Contribution

Feel free to open issues or submit pull requests for bug fixes and feature enhancements.

---

Happy Gaming! ✨

