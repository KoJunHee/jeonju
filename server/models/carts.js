/*
* carts Model
* Created by ikoobmacpro on 2017.11.10..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'carts',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        email: {
            type: 'string',
            required: true
        },
        num: {
            type: 'integer'
        },
        stores: {
            type: 'array'
        },
        stays: {
            type: 'array'
        },
        name:{
            type: 'string'
        }
    }
};
