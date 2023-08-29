const geoip = require('geoip-lite')

module.exports = (req, res) => {
  const external = req.headers['x-real-ip']
  res.status(200).json({
    external, ...geoip.lookup(external)
  })
}
