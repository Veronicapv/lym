// recperando el argumento que  es pasado al script
var ageArgument = +proecess.argv [2];
//conectamos a la base de datos
//paso 1 carga el driver en nuestro xcript
var mongodb= require('mongodb');
// paso 2 El driver de MongoDB ns proportciona 
// un cliente po donde lo extraemos 
// la libreri 
var mongoClient = mongodb.MomngoClient;
//paso 3conectamos el cliente con la base de datos 
//De datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function (err, db){
 if (err){
console.log("> error al conectarse a:"+
 'mongodb://127.0.0.1:27017/learnyoumongo');
 throw err;
}
//obteniendo la coleccion
var parrotsCollection = db.collection('parrots');
//
parrotscollection.find({

    age:{$gt:ageArgument}
});
//
objetoResultado.toArray(function(err, docs){
    console.log(docs);
//cerrandola conexion  
db.close();
});
});