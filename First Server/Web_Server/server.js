const http = require("http");
const localhost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Json");
    res.end("Server Made Successfully");
  } else if (req.url == "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Json");
    res.end("Your are Now at the Login route");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "Json");
    res.end("404 Not Found");
  }
});
server.listen(port, localhost, () => {
  console.log(`Server is listening at http://${localhost}:${port}`);
});

// const http = require("http");
// const url = require("url");
// const queryString = require("querystring");
// const fs = require("fs");

// const localhost = "127.0.0.1";
// const port = 3000;
// const usersFilePath = "./users.json"; // Path to JSON file to store user data

// // Load users data from file or initialize an empty array
// let users = [];
// if (fs.existsSync(usersFilePath)) {
//   const usersData = fs.readFileSync(usersFilePath, "utf8");
//   users = JSON.parse(usersData);
// }

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url);
//   const path = parsedUrl.pathname;

//   if (req.method === "POST") {
//     if (path === "/signup") {
//       let body = "";
//       req.on("data", (chunk) => {
//         body += chunk.toString();
//       });
//       req.on("end", () => {
//         const userData = queryString.parse(body);
//         const { username, password } = userData;
//         // Check if user already exists
//         const existingUser = users.find((user) => user.username === username);
//         if (existingUser) {
//           res.writeHead(409, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "User already exists" }));
//         } else {
//           users.push({ username, password });
//           // Write updated users data to file
//           fs.writeFileSync(usersFilePath, JSON.stringify(users));
//           res.writeHead(201, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "User created successfully" }));
//         }
//       });
//     } else if (path === "/login") {
//       // Login endpoint implementation remains the same
//       // ...
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Route not found" }));
//     }
//   } else {
//     res.writeHead(405, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Method not allowed" }));
//   }
// });

// server.listen(port, localhost, () => {
//   console.log(`Server is listening at http://${localhost}:${port}`);
// });
