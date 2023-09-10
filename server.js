
/* Require modules and dependencies */
const express = require('express');

/* Setup server */
const server = express();
const PORT = 3000;

/* Show site */
server.use(express.static('./public'))


server.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

/* Setup server to be listening on the PORT */
server.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`))
