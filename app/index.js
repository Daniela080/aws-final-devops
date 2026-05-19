const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    instance: process.env.HOSTNAME || 'local'
  });
});

app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'API funcionando correctamente',
    version: '1.0.0'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app;