const saveBody = (req, res, next) => {
  req.data = req.body;
  next();
};
export default saveBody;
