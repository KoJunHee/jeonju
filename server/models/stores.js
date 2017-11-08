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
        attr1: {
            type: 'string',
            required: true
        },
        attr2: {
            type: 'integer',
            required: true
        }
    }
};
