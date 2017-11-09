/*
* stores Model
* Created by ikoobmacpro on 2017.11.08..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'stores',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        closeTime: {
            type: 'string'
        },
        foodUid: {
            type: 'string'
        },
        holiday: {
            type: 'string'
        },
        isPaking: {
            type: 'integer'
        },
        isReserve: {
            type: 'integer'
        },
        mainImgUrl: {
            type: 'string'
        },
        mainMenu: {
            type: 'string'
        },
        newAddr: {
            type: 'string'
        },
        openDay: {
            type: 'string'
        },
        openTime: {
            type: 'string'
        },
        parkingDetail: {
            type: 'string'
        },
        posx: {
            type: 'string'
        },
        posy: {
            type: 'string'
        },
        seatCnt: {
            type: 'integer'
        },
        storeNm: {
            type: 'string'
        },
        tableCnt: {
            type: 'integer'
        },
        tel: {
            type: 'string'
        },
    }
};


