/*
* users Model
* Created by ikoobmacpro on 2017.11.08..
* Copyright (c) 2017 ikoobmacpro. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'user',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        email: {
            type: 'string',
            required: true
        },
        key: {
            type: 'string',
            required: true
        }
    }
};

