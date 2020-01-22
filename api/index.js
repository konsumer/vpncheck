module.exports = (req, res) => {
  res.status(200).send(req.headers['x-real-ip'])
}
