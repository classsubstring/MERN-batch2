export const authMiddleware = (req, resp, next) => {
  const { token } = req.headers;
  console.log(token);
  console.log("this is middleware...");
  if (token == "7412") {
    next();
  } else {
    return resp.status(403).send("You are not allowed !!");
  }

  // resp.send("hello i am middleware");
};
