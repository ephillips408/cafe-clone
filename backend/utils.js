import jwt from "jsonwebtoken";

const getToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
};

const isAuth = (req, res, next) => {
  // Will need this when products are created. Admin must be authorized to create product.
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length); // Removes "Bearer "
    jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token" });
      }
      req.user = decode; // Saves decoded data to user.
      next();
      return;
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};

export { getToken, isAuth };
