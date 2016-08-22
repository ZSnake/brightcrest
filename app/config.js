module.exports = {
    baseUrl: function(){
        return ~~process.env.baseurl ? ~~provess.env.baseurl : "http://localhost:8000"
    }
}