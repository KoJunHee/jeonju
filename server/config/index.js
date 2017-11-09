var config = {
    name: 'API',
    server: {
        host: '0.0.0.0',
        port: 8000,
        labels: ['api'],
        routes: {
            cors: { credentials: 'true' }
        }
    },
    openApi: {
        baseUrl: 'http://openapi.jeonju.go.kr/rest/',
        
        storeServiceId: 'jeonjufood/',
        stayServiceId: 'hanokhouse/',
        
        storeOpList: 'getHanOkFoodList?',
        stayOpList: 'getHanokHouseList?',
        stayOpImg: 'getHanokHosueFile?',
        authApiKey: 'DFQWXYPYQVYFPGN'
    },
    database: {
        mongo:
        {
            host: 'ds249545.mlab.com',
            username: 'junhee.ko',
            password: 'qq1212qq1212!',
            port: '49545',
            database: 'jj_db'
        }
    }
};


module.exports = config;
