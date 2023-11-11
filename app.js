const http = require("http");

// function rqListener(req, res) {

// }

const server = http.createServer((req, res) => {
  //console.log(req);
  // console.log("Kaustav");
  const url = req.url;
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About Us</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Js</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000);
