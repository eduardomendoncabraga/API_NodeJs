'use strict';
var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgrididKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'eduardo@smnti.com.br',
        subject: subject,
        html: body
    });
}