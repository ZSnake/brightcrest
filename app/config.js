module.exports = {
    baseUrl: function(){
    //never use production
        var environment = 'production';
        if(environment === 'dev')
            return 'https://ladyluck-dev.herokuapp.com'
        if(environment === 'production')
            return 'https://ladyluck-backend.herokuapp.com'
        return 'http://localhost:8000';
    }
}