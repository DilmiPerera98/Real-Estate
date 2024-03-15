import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next({ statusCode: 401, message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next({ statusCode: 403, message: "Forbidden" });

    //sending rhe information
    req.user = user;
    next();
  });
};
