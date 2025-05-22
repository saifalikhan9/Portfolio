"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import LinkedInIcon from "./Icons/linkedIn-icon";
import PhoneIcon from "./Icons/phone-icon";
import Link from "next/link";
import { GithubIcon } from "./Icons/github-icon";
import GmailIcon from "./Icons/gmail-icon";
import { Card } from "./ui/card";

export function ContactSection() {
  const contacts = [
    {
      name: "LinkedIn",
      description: "View Account",
      icon: <LinkedInIcon width={30} height={30} />,
      href: "https://www.linkedin.com/in/saifalikhan10/",
    },
    {
      name: "Github",
      description: "View Account",
      icon: <GithubIcon width={30} height={30} />,
      href: "https://github.com/saifalikhan9",
    },

    {
      name: "Email",
      description: "saifsh0921@gmail.com",
      icon: <GmailIcon width={30} height={30} />,
      href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=saifsh0921@gmail.com",
    },
    {
      name: "Phone",
      description: "+91 8090587775",
      icon: <PhoneIcon width={30} height={30} />,
      href: "tel:+918090587775",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24  bg-muted/10 rounded">
      <div className="container ">
        <SectionHeading
          title="Contact me"
          subtitle="Feel free to reach out for collaborations or just a friendly hello 😊"
        />

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto px-4">

          {contacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className=""
            >
              <Card className="rounded-xl p-2  border shadow">
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-1">
                    <div className="mb- py-2">{contact.icon}</div>
                    <div className="">
                      <h3 className="text-xl font-medium">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
