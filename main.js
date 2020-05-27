
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    app = http.createServer();

const getJSONString = (obj) => {
    return JSON.stringify(obj, null, 2);
}

app.on('request', (req, res) => {
    var body = [];
    req.on('data', (bodydata) => {
        body.push(bodydata);
    });
    req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('Request Body Contents: ' + body);
    });
// //

    res.writeHead(httpStatus.OK, {
        'contentType': 'text/html'
    });

    console.log(getJSONString(req.method));
    console.log(req.url);
    console.log(req.headers);
    res.writeEnd('<h2>This will show up on the screen.</h2>');

});

app.listen(port);

console.log('Server has started. Listening on PORT' + port);

