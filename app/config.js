module.exports = {
    baseUrl: function(){
        var environment = 'production';
        if(environment === 'dev')
            return 'https://ladyluck-dev.herokuapp.com'
        if(environment === 'production')
            return 'https://ladyluck-backend.herokuapp.com'
        return 'https://ladyluck-backend.herokuapp.com';
    }
}
