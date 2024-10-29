const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000; // Port number for local server

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Define any API routes you need
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
