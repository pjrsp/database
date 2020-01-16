var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');

const port = 3002;

var app = new express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function(req, res) {
    res.sendFile('/search.html', { root: __dirname });

});

app.post('/search', function(req, res) {
    res.send("aaaaaaaa")

//     var sql = require('mssql');
//     var config = {
//         user: 'sa',
//         password: 'psdsystem',
//         server: '192.168.40.7',
//         database: 'PSD_POS',
//         options: {
//             instanceName: 'sqlexpress'
//         }
//     };
//     sql.close();
//     sql.connect(config, function(err) {
//         if (err) console.log('ERROR : ' + err);

//         var query = 'SELECT XFsahGrand FROM TPOSTSalHD\
//         WHERE XVBchCode = \'' + req.body.uname + '\'\
//         AND XDSahDocDate BETWEEN \'' + req.body.fdate + '\'\
//         AND  \'' + req.body.ldate + '\'\
//         ';
//         var request = new sql.Request();
//         request.query(query, function(err, recordset) {
//             if (err) console.log('ERROR : ' + err);

//             if (recordset != undefined && recordset.recordset.length > 0) {
//                 res.send(recordset.recordset);
//             } else {
//                 res.send("No data found.");
//             }
//         });
//     });
});

app.listen(port, function() {
    console.log('Node start on port : ' + port);
});
