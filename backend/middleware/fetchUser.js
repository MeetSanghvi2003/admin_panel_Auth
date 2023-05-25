const jwt = require("jsonwebtoken");
const JWT_SIGN = "Shoppo";

const fetchUsers = async (req, res, next) => {
  const auth = req.header("auth");
  if (!auth) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(auth, JWT_SIGN);
    req.user = await data.user;
    await next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUsers;
