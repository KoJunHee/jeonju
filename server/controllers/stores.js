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
 *                               - 업체 전체 조회 (R)
*************************************************************************/
exports.findAll = {
    description: '업체 조회 (R)',
    tags: ['api'],
    auth: false,
    handler: function (request, reply) {

        Co(function* () {
            try {
                var stores = yield Stores.find();
                return stores;
            }
            catch (err) {
                throw err;
            }
        }).then(function (stores) {
            reply(stores);
        }).catch(function (err) {
            return reply(Boom.badImplementation(err));
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
            foodUid: Joi.string().required()
        }
    },
    auth: false,
    handler: function (request, reply) {
        // 조회
        Stores.findOne({ foodUid: request.params.foodUid })
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
//  *                     - 업체 등록하기 (db 저장 위해 한 번 쓰임)
// *************************************************************************/
// exports.create = {
//     description: '업체 등록하기 (db 저장 위해 한 번 쓰임)',
//     tags: ['api'],
//     auth: false,
//     handler: function (request, reply) {

//         // make request url
//         var openApiUrl = Config.openApi.baseUrl +
//             Config.openApi.storeServiceId +
//             Config.openApi.operation +
//             'authApiKey=' +
//             Config.openApi.authApiKey +
//             '&pageSize=47'

//         //request
//         Request({
//             method: 'GET',
//             uri: openApiUrl,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         },
//             function (error, response, body) {
//                 if (error) {
//                     return console.error('upload failed:', error);
//                 }

//                 //검색한 자료를 디비에 저장
//                 Co(function* () {
//                     try {
//                         yield Stores.create(JSON.parse(body).body.data.list);
//                     } catch (err) {
//                         throw err;
//                     }
//                 }).then(function () {
//                     reply('success');
//                 }).catch(function (err) {
//                     return reply(Boom.badImplementation(err));
//                 });
//             });
//     }
// };

/*********************************************************************** 
 *                               - 업체 정보 수정 (U)
*************************************************************************/
// exports.update = {
//     description: '업체 정보 수정 (U)',
//     tags: ['api'],
//     validate: {
//         params: {
//             storesId: Joi.string().required()
//         },
//         payload: {
//             attr1: Joi.string().required(),
//             attr2: Joi.string().required()
//         }
//     },
//     auth: false,
//     handler: function (request, reply) {
//         // 수정
//         Stores.update({ id: request.params.storesId }, request.payload)
//             .exec(function (err, stores) {
//                 // 결과
//                 if (err) {
//                     return reply(Boom.badImplementation(err));
//                 }
//                 reply(stores);
//             });
//     }
// };

// /*********************************************************************** 
//  *                               - 업체 삭제 (D)
// *************************************************************************/
// exports.destroy = {
//     description: '업체 삭제 (D)',
//     tags: ['api'],
//     validate: {
//         params: {
//             storesId: Joi.string().required()
//         }
//     },
//     auth: false,
//     handler: function (request, reply) {
//         // 삭제
//         Stores.destroy({ id: request.params.storesId })
//             .exec(function (err) {
//                 // 결과
//                 if (err) {
//                     return reply(Boom.badImplementation(err));
//                 }
//                 reply('destroy');
//             });
//     }
// };