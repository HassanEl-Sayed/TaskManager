const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email , name) =>{
    sgMail.send({
        to :email,
        from: 'hs247319@gmail.com',
        subject:'Thanks for joining in',
        text:'Welcome to the app '+name

    })
}

const sendCancelationEmail = (email , name ) =>{
    sgMail.send({
        to :email,
        from: 'hs247319@gmail.com',
        subject:'Sorry to see you go ',
        text:'Goodbye ,'+name+'I hope to see you back'

    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail 
}

// sgMail.send({
//     to: 'hs247319@gmail.com',
//     from: 'hs247319@gmail.com',
//     subject: 'this is my first creation!',
//     text : 'Thanks'
// })
