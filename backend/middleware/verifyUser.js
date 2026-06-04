const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {

  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
 console.log("=== TOKEN FOUND ===", token);
  console.log("Token received:", token); 

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "No token found",
    });
  }

  try {
     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    console.log("Decoded user:", decoded);
    next();
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Invalid token",
    });
  }
};

module.exports = verifyUser;