import type { APIRoute } from "astro";
import { Resend } from "resend";
import GithubAccessTokenEmail from "../../email/sampleEmail";
import { render } from "@react-email/render";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  //send an email

  const emailContent = GithubAccessTokenEmail({
    username: "Julio",
  });

  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true,
  });

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "It Works!",
    html,
    text,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
};
