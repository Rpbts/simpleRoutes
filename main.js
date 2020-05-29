
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes');

const getJSONString = (obj) => {
    return JSON.stringify(obj, null, 2);
}

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const app = http.createServer((req, res) => {
    res.writeHead(200,
        { "Content-Type": "text/html" }
    );

    if (routeResponseMap[req.url]) {
        res.end(routeResponseMap[req.url]);
    } else {
        let responseMessage = "<h1/> WELCOME  </h1>";
        res.end(responseMessage);
    }
});

app.listen(port);
console.log('Server has started. Listening on PORT' + port);


/* req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('Request Body Contents: ' + body);
});

res.writeHead(httpStatus.OK, {
    'contentType': 'text/html'
}); 

console.log(getJSONString(req.method));
console.log(req.url);
console.log(req.headers);
res.end('<h2>This will show up on the screen.</h2>'); 54
*/
//
