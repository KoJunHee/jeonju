/*
* stays Route
* Created by ikoobmacpro on 2017.11.09..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

var controller = require('../controllers/stays');

module.exports = [
    { method: 'GET', path: '/stays', config: controller.findAll },
    { method: 'GET', path: '/stays/{dataSid}', config: controller.find },
    //{ method: 'POST', path: '/stays', config: controller.create },
    //{ method: 'PUT', path: '/stays/{dataSid}', config: controller.update },
    //{ method: 'DELETE', path: '/stays/{staysId}', config: controller.destroy }
];