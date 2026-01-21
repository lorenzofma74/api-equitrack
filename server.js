/* server.js */
const EXPRESS = require('express');
const CORS = require('cors');
const FS = require('fs'); 

const APP = EXPRESS();


const PORT = process.env.PORT || 3000;

APP.use(CORS());


APP.get('/exercices', function(req, res) {

   
    FS.readFile('./exercices.json', 'utf8', function(err, data) {
        if (err) {
            console.error("Erreur de lecture du fichier:", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }

       
        const EXERCICES = JSON.parse(data);
        res.json(EXERCICES);
    });
});


APP.listen(PORT, function() {
    console.log("Serveur API en écoute sur le port " + PORT);
});
