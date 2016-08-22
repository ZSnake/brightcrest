module.exports = {
    baseUrl: function(){
        return process.env.baseurl ? process.env.baseurl : "http://localhost:8000"
    }
}