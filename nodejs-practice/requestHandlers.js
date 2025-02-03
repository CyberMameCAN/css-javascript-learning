// var exec = require("child_process").exec; // ノンブロッキング操作
const formidable = require("formidable");
var querystring = require("querystring"),
    fs = require("fs");

function start(response, postData) {
  console.log("Request handler 'start' was called.");
  // var content = "empty";

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8">'+
    '</head>'+
    '<body>'+
    '<form action="/upload2" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text">'+
    '</form>'+

    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+


    '</body>'+
    '</html>';

    response.writeHead(200, {"Context-Type": "text/html"});
    response.write(body);
    response.end();
  
  // exec("ls -lah", function (error, stdout, stderr) {
  //   // content = stdout;
  //   response.writeHead(200, {"Context-Type": "text/plain"});
  //   response.write(stdout);
  //   response.end();
  // });

  // return content

  // function sleep(milliSeconds) {
  //   var startTime = new Date().getTime();
  //   while (new Date().getTime() < startTime + milliSeconds);
  // }

  // sleep(10000);
  // return "Hello Start";
}

// function upload(response, postData) {
function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    /* Possible error on Windows systems:
       tried to rename to an already existing file */
    fs.rename(files.upload.path, "/tmp/tumblr.jpg", function(err) {
      if (err) {
        fs.unlink("/tmp/tumblr.jpg");
        fs.rename(files.upload.path, "/tmp/tumblr.jpg");
      }
    });
    response.writeHead(200, {"Context-Type": "text/html"});
    // response.write("You've sent the text: " + querystring.parse(postData).text);
    response.write("received image:<br>");
    response.write("<img src='/show'>");
    response.end();
  });
}

// function show(response, postData) {
function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/tumblr.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Context-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Context-Type": "image/jpg"});
      response.write(file, "binary");
      response.end();
    }
  })
}
exports.start = start;
exports.upload = upload;
exports.show = show;
