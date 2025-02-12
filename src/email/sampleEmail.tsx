import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import * as React from "react";

interface GithubAccessTokenEmailProps {
  username?: string;
  phone?: string;
  message?: string;
}

const baseUrl = "https://demo.react.email/";

export const GithubAccessTokenEmail = ({
  username,
  message,
  phone,
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Preview>Somos Cardinova</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          style={img}
          src="https://cardinova.pe/logo.png"
          width="120"
          height="32"
          alt="Cardinova logo"
        />

        <Text style={title}>
          <strong>Hola @{username}</strong> Mucho gusto nos contactaste para
          atender tu mensaje:
        </Text>

        <Section style={section}>
          <Text>
            <strong>Tu mennsaje: </strong>
            {message}
          </Text>

          <Text>
            Nos estaremos comunicando contigo los mas pronto atravez de Whatsap
            con tu número:
            <strong> {phone}</strong>
          </Text>

          <Text>Muchas Gracias @{username}</Text>

          <Button href="https://cardinova.pe" style={button}>
            Visita la Web
          </Button>
        </Section>
        <Text style={links}>
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          Cardinova | 88 Colin P Kelly Jr Street ・Perú - Lima, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

GithubAccessTokenEmail.PreviewProps = {
  username: "alanturing",
} as GithubAccessTokenEmailProps;

export default GithubAccessTokenEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const img = {
  objectFit: "contain" as const,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#088ab2",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
