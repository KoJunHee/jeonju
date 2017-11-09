/*
* stays Controller
* Created by ikoobmacpro on 2017.11.09..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

var Boom = require('boom'),
    Joi = require('joi'),
    Request = require('request'),
    Co = require('co'),
    Config = require('../config');

// 

/*********************************************************************** 
 *                               - 숙소 전체 조회 (R)
*************************************************************************/
exports.findAll = {
    description: '숙소 전체 조회 (R)',
    tags: ['api'],
    auth: false,
    handler: function (request, reply) {

        // 전체 조회
        Stays.find()
            .exec(function (err, stays) {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(stays);
            });
    }
};

/*********************************************************************** 
 *                               - 특정 숙소 조회 (R)
*************************************************************************/
exports.find = {
    description: '특정 숙소 조회 (R)',
    tags: ['api'],
    validate: {
        params: {
            dataSid: Joi.string().required()
        }
    },
    auth: false,
    handler: function (request, reply) {
        // 조회
        Stays.findOne({ dataSid: request.params.dataSid })
            .exec(function (err, stays) {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(stays);
            });
    }
};

/*********************************************************************** 
 *                               - 특정 숙소 이미지 추가 (R)
*************************************************************************/
// exports.update = {
//     description: '특정 숙소 이미지 추가 (R)',
//     tags: ['api'],
//     validate: {
//         params: {
//             dataSid: Joi.string().required()
//         }
//     },
//     auth: false,
//     handler: function (request, reply) {

//         // make request url
//         var openApiUrl = Config.openApi.baseUrl +
//             Config.openApi.stayServiceId +
//             Config.openApi.stayOpImg +
//             'authApiKey=' +
//             Config.openApi.authApiKey+
//             '&dataSid=' + 
//             request.params.dataSid;


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
                
//                 //검색한 자료로 업데이트
//                 Co(function* () {
//                     try {
//                         var stay = yield Stays.update({dataSid: request.params.dataSid}, {fileUrl : JSON.parse(body).body.data.list[0].fileUrl});
//                         return stay;
//                     } catch (err) {
//                         throw err;
//                     }
//                 }).then(function (stay) {
//                     reply(stay);
//                 }).catch(function (err) {
//                     return reply(Boom.badImplementation(err));
//                 });
//             });
//     }

// }

/*********************************************************************** 
//  *                     - 숙소 등록하기 (db 저장 위해 한 번 쓰임)
// *************************************************************************/
// exports.create = {
//     description: '숙소 등록하기 (db 저장 위해 한 번 쓰임)',
//     tags: ['api'],
//     auth: false,
//     handler: function (request, reply) {

//         // make request url
//         var openApiUrl = Config.openApi.baseUrl +
//             Config.openApi.stayServiceId +
//             Config.openApi.stayOpList +
//             'authApiKey=' +
//             Config.openApi.authApiKey +
//             '&pageSize=110'

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
//                         yield Stays.create(JSON.parse(body).body.data.list);
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



// // delete data
// exports.destroy = {
//     description: '',
//     tags: ['api'],
//     validate: {
//         params: {
//             staysId: Joi.string().required()
//         }
//     },
//     auth: false,
//     handler: function (request, reply) {
//         // 삭제
//         Stays.destroy({ id: request.params.staysId })
//             .exec(function (err) {
//                 // 결과
//                 if (err) {
//                     return reply(Boom.badImplementation(err));
//                 }
//                 reply('destroy');
//             });
//     }
// };