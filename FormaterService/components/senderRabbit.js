const {encrypt} = require("../helpers/crypto");

exports.sender = (senso)=>{
    var amqp = require('amqplib/callback_api');
    amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'logs';
        var msg = process.argv.slice(2).join(' ') || JSON.stringify(senso);

        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });
        const sensoEncrypted = encrypt(msg);
        channel.publish(exchange, '', Buffer.from(sensoEncrypted));
        console.log(" [x] Sent %s", JSON.parse(msg));
    });

    
    });
}