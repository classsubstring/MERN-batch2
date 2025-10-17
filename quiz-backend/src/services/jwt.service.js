import jsonwebtoken from "jsonwebtoken";

export const createToken = (user, token_type = "access_token") => {
  return jsonwebtoken.sign(
    {
      email: user.email,
      username: user.username,
      sub: user._id,
      token_type,
    },
    "asdjklopohjcwehnhfgbhxcuecjhwghefkunjxdwejklbrvyhwj;hfbcnetjh",
    {
      expiresIn: "1d",
    }
  );
};
