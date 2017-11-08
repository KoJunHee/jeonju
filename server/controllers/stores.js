/*
* stores Controller
* Created by ikoobmacpro on 2017.11.08..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

var Boom = require('boom'),
    Joi = require('joi'),
    Request = require('request'),
    Co = require('co'),
    Config = require('../config');


/*********************************************************************** 
 *                     - 업체 등록하기 (db 저장 위해 한 번 쓰임)
*************************************************************************/
// // create new data
// exports.create = {
//     description: '업체 등록하기 (db 저장 위해 한 번 쓰임)',
//     tags: ['api'],
//     validate: {
//         payload: {
//             attr1: Joi.string().required(),
//             attr2: Joi.string().required()
//         }
//     },
//     auth: false,
//     handler: function (request, reply) {

//         //make request url
//         var openApiUrl = Config.openApi.baseUrl +
//             '?authApiKey=' +
//             Config.openApi.authApiKey;


//         //request
//         Request({
//             method: 'GET',
//             uri: openApiUrl
//         },
//             function (error, response, body) {
//                 if (error) {
//                     return console.error('upload failed:', error);
//                 }

//                 var tempArr = JSON.parse(body).response.body.items.item;
//                 var resultArr = [];

//                 var totalCount = {
//                     cnt: 0
//                 };

//             });
//     }


// };



/*********************************************************************** 
 *                               - 업체 조회 (R)
*************************************************************************/
exports.findAll = {
    description: '업체 조회 (R)',
    tags: ['api'],
    auth: false,
    handler: function (request, reply) {

        // make request url
        var openApiUrl = Config.openApi.baseUrl +
            '?authApiKey=' +
            Config.openApi.authApiKey;

        //request
        Request({
            method: 'GET',
            uri: openApiUrl
        },
            function (error, response, body) {
                if (error) {
                    return console.error('upload failed:', error);
                }
                console.log(body);    
                reply(body);

            });
    }
};

/*********************************************************************** 
 *                               - 특정 업체 조회 (R)
*************************************************************************/
exports.find = {
    description: '특정 업체 조회 (R)',
    tags: ['api'],
    validate: {
        params: {
            storesId: Joi.string().required()
        }
    },
    auth: false,
    handler: function (request, reply) {
        // 조회
        Stores.findOne({ id: request.params.storesId })
            .exec(function (err, stores) {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(stores);
            });
    }
};


/*********************************************************************** 
 *                               - 업체 정보 수정 (U)
*************************************************************************/
exports.update = {
    description: '업체 정보 수정 (U)',
    tags: ['api'],
    validate: {
        params: {
            storesId: Joi.string().required()
        },
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: function (request, reply) {
        // 수정
        Stores.update({ id: request.params.storesId }, request.payload)
            .exec(function (err, stores) {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(stores);
            });
    }
};

/*********************************************************************** 
 *                               - 업체 삭제 (D)
*************************************************************************/
exports.destroy = {
    description: '업체 삭제 (D)',
    tags: ['api'],
    validate: {
        params: {
            storesId: Joi.string().required()
        }
    },
    auth: false,
    handler: function (request, reply) {
        // 삭제
        Stores.destroy({ id: request.params.storesId })
            .exec(function (err) {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply('destroy');
            });
    }
};