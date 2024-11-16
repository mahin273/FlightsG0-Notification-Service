const {TicketRepository} = require('../repositories');
const { MAILER } = require('../config');

const ticketRepo = new TicketRepository();

async function sendMail(mailForm,mailTo,text) {
    try {
        const response = await MAILER.sendMail({
            from: mailForm,
            to: mailTo,
            subject: subject,
            text: text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data) {
    try {
        const response = await ticketRepo.create(data);
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails() {
    try {
        const response = await ticketRepo.getPendingTicket();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendMail,
    createTicket,
    getPendingEmails
}