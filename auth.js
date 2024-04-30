const jwt = require("jsonwebtoken");
const fs = require("fs");

const login = (req, res) => {
  if (req.body.user !== "root" || req.body.password !== "toor") {
    return res.sendStatus(401);
  }

  const secret = fs.readFileSync("./.cert/private.pem");
  const token = jwt.sign(
    {
      data: "Connected",
    },
    secret,
    { expiresIn: "1h", algorithm: "RS256" }
  );

  return res.send({ token: token });
};

const verifyToken = (req, res) => {
  const [type, token] = req.headers.authorization.split(" ");

  const secret = fs.readFileSync("./.cert/public.pem");

  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return res.sendStatus(401);
    } else {
      return res.send({ data: "Authorized" });
    }
  });
};
module.exports = { login, verifyToken };
