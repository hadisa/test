// api/proxy.js
const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const response = await fetch('http://your-http-backend.com' + req.url)
  const data = await response.json()
  res.json(data)
}
