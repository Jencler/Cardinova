import { defineAction } from "astro:actions";
import GithubAccessTokenEmail from "../email/sampleEmail";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "astro:schema";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      fullname: z.string(),
      email: z.string().email(),
      phone: z.string(),
      message: z.string(),
    }),
    handler: async ({ fullname, email, phone, message }) => {
      const emailContent = GithubAccessTokenEmail({
        username: fullname,
        message: message,
        phone: phone,
      });

      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true,
      });

      const { data, error } = await resend.emails.send({
        from: "Cardinova <info@cardinova.pe>",
        to: [email],
        subject: `Cardinova te saluda ${fullname} 🙂.`,
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return data;
    },
  }),
};
