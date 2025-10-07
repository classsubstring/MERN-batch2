import express from "express";
import userRouter from "./routes/users.route.js";
import quizRouter from "./routes/quiz.route.js";

const server = express();

server.use("/api", userRouter);
server.use("/api", quizRouter);

server.listen(8181, () => {
  console.log(`server started on port ${8181}`);
});

// // import { v4 } from "uuid";
// // console.log("start...");
// import fs from "fs";
// import http from "http";

// // fs.writeFile("abc.txt", "This is my file content", (err) => {
// //   if (err) {
// //     console.log("kuch dikkat ho gui hai");
// //     console.log(err);
// //     return;
// //   }
// //   console.log("file written successfully");
// // });
// // console.log("done...");

// // const content = fs.readFileSync("abc.txt", "utf-8");
// // console.log(content);

// const server = http.createServer((req, resp) => {
//   resp.writeHead(200, {
//     "Content-Type": "text/plain",
//   });
//   resp.end("<h1>How are you?? i am sever ok good ok</h1>");
// });

// server.listen(7979, () => {
//   console.log("server started on port number ", 7979);
// });
