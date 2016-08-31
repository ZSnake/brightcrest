module.exports = {
    baseUrl: function(){
        var isRemote = true; 
        return isRemote ? "https://ladyluck-backend.herokuapp.com" : "http://localhost:8000";
    }
}