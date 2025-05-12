const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 7860

// Serve static files
app.use(express.static(path.join(__dirname)))

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"))
})

app.get("/create-receipt", (req, res) => {
  res.sendFile(path.join(__dirname, "create-receipt.html"))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Open http://localhost:${PORT} in your browser`)
})
