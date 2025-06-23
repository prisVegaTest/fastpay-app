const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡FASTPAY CI/CD funcionando!'));

app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));