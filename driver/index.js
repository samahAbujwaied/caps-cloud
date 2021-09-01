'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const sns = new AWS.SNS();


const topic = 'arn:aws:sns:us-east-1:884347515785:driver';
const msg = {
    orderId: '1234',
    customer: 'Jane Doe',
    vendorId: topic
};

const params = {
    TopicArn: topic,
    Message: JSON.stringify(msg)
}

sns.publish(params).promise().then(data=> {
    console.log(data)
}).then((resp)=>{
console.log('Your order has been send');
}).catch(err=> {
    console.log(err)
});