var express = require('express');
var app = express();
var path = require('path');

// permitir peticiones get al directorio raiz /public
app.use(express.static(__dirname + '/public'));
app.set('port',process.env.PORT || '3000');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// petición principal del servidor
app.get('/', function(req, res){
    res.render('index',{ 
        title : 'Hola mundo desde Jade',
        autor : 'Carlos Roberto Balam Balam'
    });
});

app.get('/usuarios', function(req, res) {
    // pasamos datos a la vista de jade
    var usuarios = [
        { nombre : 'nombre a', apellido : 'apellido a'},
        { nombre : 'nombre b', apellido : 'apellido b'},
        { nombre : 'nombre c', apellido : 'apellido c'}
    ];

    // llamamos a la vista y pasamos datos
    res.render('usuarios', { usuarios : usuarios });
});

//petición get desde el server
app.get('/whatever', function(req, res){
    res.send('método diferente');
});

// pueerto sobre el cual escucha el servidor
app.listen(3000, function(){
    console.log('puerto 3000 escuchando peticion');
});