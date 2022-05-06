import nodemailer from "nodemailer";
import { IMailAdapter, SendMailData } from "../IMailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d985aca99b817",
    pass: "5c31e157cce54d",
  },
});

export class NodeMailerMailAdpter implements IMailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Eldon Costa <eldoncosta1@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
