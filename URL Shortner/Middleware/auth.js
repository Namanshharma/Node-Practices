const { getUser } = require("../Service/auth");

const restrictToLoggedInUserOnly = (req, res, next) => {
    const userUid = req.cookies?.uid;
    if (!userUid) { return res.redirect("/login"); }

    const user = getUser(userUid);
    if (!user) { return res.redirect("/login"); }
    req.user = user;
    next();
}

module.exports = restrictToLoggedInUserOnly;