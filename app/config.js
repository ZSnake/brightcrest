module.exports = {
    baseUrl: function(){
        if(process.env.environment === 'dev')
            return 'https://ladyluck-dev.herokuapp.com'
        if(process.env.environment === 'production')
            return 'https://ladyluck-backend.herokuapp.com'
        return 'http://localhost:8000';
    }
}