function sendMessage(req, res) {
  res.status(200).json({ ola: 'Dante'})
}

export default sendMessage;