import env from '../config/env.js'
import { transporter } from '../config/mail.js'

interface Options {
  to: string
  subject: string
  html: string
}

export const sendEmail = async ({ to, subject, html }: Options) => {
  return await transporter.sendMail({
    from: env.smtpFrom,
    to,
    subject,
    html,
  })
}