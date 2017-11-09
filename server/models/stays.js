/*
* stays Model
* Created by ikoobmacpro on 2017.11.09..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'stays',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        addr: {
            type: 'string',
        },
        addrdetail: {
            type: 'string',
        },
        boardSid: {
            type: 'string',
        },
        dataContent: {
            type: 'string',
        },
        dataSid: {
            type: 'string',
        },
        dataTitle: {
            type: 'string',
        },
        hanokTypeStr: {
            type: 'string',
        },
        homepage: {
            type: 'string',
        },
        introContent: {
            type: 'string',
        },
        memo: {
            type: 'string',
        },
        posx: {
            type: 'string',
        },
        posy: {
            type: 'string',
        },
        tel: {
            type: 'string',
        },
        zipcode: {
            type: 'string',
        },
        fileUrl: {
            type: 'string'
        }
    }
};
