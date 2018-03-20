const http = require('http');

const servidor = http.createServer(
    (req, res) => {
        //const objeto = { name: 'a' };
        res.setHeader("content-type", "text/plain");
        const valor = Math.floor(Math.random() * 5000);
        res.write(JSON.stringify(valor));
        res.end();
    }
);

servidor.listen(5000, () => {
    console.log('Servidor listo en el puerto 5000');
});