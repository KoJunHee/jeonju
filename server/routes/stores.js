/*
* stores Route
* Created by ikoobmacpro on 2017.11.08..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

var controller = require('../controllers/stores');

module.exports = [
    { method: 'GET', path: '/stores', config: controller.findAll },
    { method: 'GET', path: '/stores/{storesId}', config: controller.find },
    //{ method: 'POST', path: '/stores', config: controller.create },
    { method: 'PUT', path: '/stores/{storesId}', config: controller.update },
    { method: 'DELETE', path: '/stores/{storesId}', config: controller.destroy }
];