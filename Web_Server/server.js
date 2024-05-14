// const http = require("http");
// const localhost = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "Json");
//     res.end("Server Made Successfully");
//   } else if (req.url == "/login") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "Json");
//     res.end("Your are Now at the Login route");
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "Json");
//     res.end("404 Not Found");
//   }
// });
// server.listen(port, localhost, () => {
//   console.log(`Server is listening at http://${localhost}:${port}`);
// });

const http = require("http");
const url = require("url");
const queryString = require("querystring");

const localhost = "127.0.0.1";
const port = 3000;

const users = []; // Placeholder for storing user data

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;

  if (req.method === "POST") {
    if (path === "/signup") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const userData = queryString.parse(body);
        const { username, password } = userData;
        // Check if user already exists
        const existingUser = users.find((user) => user.username === username);
        if (existingUser) {
          res.writeHead(409, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "User already exists" }));
        } else {
          users.push({ username, password });
          res.writeHead(201, { "Content-Type": "application/json" });
          console.log(
            res.end(JSON.stringify({ message: "User created successfully" }))
          );
        }
      });
    } else if (path === "/login") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const userData = queryString.parse(body);
        const { username, password } = userData;
        // Check if user exists and password matches
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Login successful" }));
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Invalid credentials" }));
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Method not allowed" }));
  }
});

server.listen(port, localhost, () => {
  console.log(`Server is listening at http://${localhost}:${port}`);
});
