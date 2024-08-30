module.exports = (req, res, next) => {
  // Adicione a lógica de autenticação aqui
  const token = req.headers['authorization'];
  if (token) {
    // Verifique o token aqui (exemplo)
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
