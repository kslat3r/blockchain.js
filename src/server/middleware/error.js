module.exports = (err, req, res) => {
  res.status(err.status || 500);
  res.send(err);
};
