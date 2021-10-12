const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDgRID_API_KEY)

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
