var config = {
    name: 'API',
    server: {
        host: 'host',
        port: port,
        labels: ['api'],
        routes: {
            cors: { credentials: 'true' }
        }
    },
    openApi: {
        baseUrl: 'baseUrl',

        storeServiceId: 'storeServiceId',
        stayServiceId: 'stayServiceId',

        storeOpList: 'storeOpList',
        stayOpList: 'stayOpList',
        stayOpImg: 'stayOpImg',
        authApiKey: 'authApiKey'
    },
    database: {
        mongo:
        {
            host: 'host',
            username: 'username',
            password: 'password',
            port: 'port',
            database: 'database'
        }
    }
};


module.exports = config;