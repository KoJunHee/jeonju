/*
* carts Route
* Created by ikoobmacpro on 2017.11.10..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

var controller = require('../controllers/carts');

module.exports = [
    { method: 'POST', path: '/carts/{email}', config: controller.create },                   //카드 등록 (C)    
    { method: 'GET', path: '/carts/{email}/{num}', config: controller.find },                //특정 카트 조회 (R)    
    { method: 'GET', path: '/carts', config: controller.findAll },                           //모든 카트 조회 (R)
    { method: 'GET', path: '/carts/{email}', config: controller.findUserCarts },             //특정 유저의 카트 목록 조회 (R)    
    { method: 'PUT', path: '/carts/{email}/{num}', config: controller.update },              //특정 카트 수정 (U)         
    { method: 'DELETE', path: '/carts/{email}', config: controller.destroy },                //특정 카드들 삭제 (D)
    { method: 'DELETE', path: '/carts/{email}/{num}', config: controller.destroyContents},   //특정 카트의 내용물들 삭제 (D)    
    { method: 'DELETE', path: '/carts', config: controller.destroyAll }                      //모든 카트 삭제 (D)
];