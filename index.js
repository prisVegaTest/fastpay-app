const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡FASTPAY CI/CD actualizado con Sonarcloud!'));

app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));