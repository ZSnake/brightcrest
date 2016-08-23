module.exports = {
    baseUrl: function(){
        return process.env.BACKEND_URL ? process.env.BACKEND_URL : "http://localhost:8000";
    }
}