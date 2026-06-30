import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | D-Arc Architectural Interiors",
  description: "Get in touch with D-Arc Architectural Interiors. Book a consultation or visit our Home Experience Centre in Kannur.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
