async function middleware1() {
    return (req, res, next) => {
        console.log("Calling Middleware 1");
    }
}

module.exports = {
    middleware1
}