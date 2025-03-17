const getRequestOfHomePage = (req, res) => {
    // res.send("Hello Naman");    // generally we need to send the Status in the reponse along with the response in JSON format
    res.status(201).json({
        OutputMessage: "Hello World"
    })
};

const postRequest = (req, res) => {
    res.status(500).json({
        email: "xxx@slomins.com"
    })
}

module.exports = postRequest;
module.exports = getRequestOfHomePage;