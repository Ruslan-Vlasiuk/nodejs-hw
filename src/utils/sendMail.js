import nodemailer from 'nodemailer';

export const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    headers: {
      'X-Mailin-Custom': 'no-track',
      'X-Mailin-Track': '0',
    },
    ...options,
  });
};
