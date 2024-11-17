const express = require('express');
const apiRoutes = require('./routes');
const { serverConfig } = require('./config');
const amqlib = require('amqplib');
const mailsender = require('./config/email-config');

async function connectQueue(params) {
    try {
        const connection = await amqlib.connect("ampq://localhost");
        const channel = await connection.createChannel();
        await channel.assertQueue('noti-queue');
        channel.consume("noti-queue", (data) => {
            console.log(`${Buffer.from(data.content)}`);
        })
    } catch (error) {
    
    }
}
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, async() => {
    console.log(`Successfully started on the server on PORT : ${serverConfig.PORT}`);
    await connectQueue();
    console.log("queue is up")

})