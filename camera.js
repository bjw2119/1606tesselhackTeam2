var tessel = require('tessel');
var av = require('tessel-av');
var os = require('os');
var http = require('http');
var port = 8080;
var camera = new av.Camera();

// http.createServer(function(req, res){
//   var takePicture = camera.capture();

//   takePicture.on('data', function(image){
//     res.writeHead(200, {'Content-Type': 'image/jpg'});
//     res.write(image);
//     res.end();
//   })
// }).listen(port, ()=> console.log('http://${os.hostname()}.local:${port}'));

// restler.post("/milkshots", {data: image, headers:{"Content-Type": 'image/jpg'}})
var postData = "hello world";
var options = {
  hostname: '',
  port: 3000,
  path: '/milkshots',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  }
};

var req = http.request(options, (res))=>{
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log('Body: ${chunk}');
  });
  res.on('end', () => {
    donsole.log('No more data in reponse.')
  });
}
req.on('error', (e)=>{
  console.log('problem with request: ${e.message}');
})
req.write(postData)
req.end()
