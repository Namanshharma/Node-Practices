const getRequestOfHomePage = (req, res) => {
    // res.send("Hello Naman");    // generally we need to send the Status in the reponse along with the response in JSON format
    res.status(201).json({
        OutputMessage: "Hello World"
    })
};

const postRequest = (req, res) => {
    res.status(200).json({
        email: "xxx@slomins.com"
        // email1: req.body.email
    })
}

// module.exports = getRequestOfHomePage;
// module.exports = postRequest;

module.exports = {  // module.exports act as object and importing it in     // this is also called as Multiple export
    getRequestOfHomePage, postRequest
} 