"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import LinkedInIcon from "./linkedIn-icon";
import PhoneIcon from "./phone-icon";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./github-icon";

export function ContactSection() {
  const contacts = [
    {
      name: "LinkedIn",
      description: "View Account",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/saifalikhan10/",
    },
    {
      name: "Github",
      description: "View Account",
      icon: <GithubIcon />,
      href: "https://github.com/saifalikhan9",
    },

    {
      name: "Email",
      description: "saifsh0921@gmail.com",
      icon: (
        <motion.div
          whileHover={{ scale: 1.15, to: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/gmail-icon.png"
            alt="Gmail icon"
            width={24}
            height={24}
          />
        </motion.div>
      ),
      href: "mailto:saifsh0921@gmail.com",
    },
    {
      name: "Phone",
      description: "+91 9539132056",
      icon: <PhoneIcon />,
      href: "tel:+919539132056",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24  bg-muted/10 rounded">
      <div className="container ">
        <SectionHeading
          title="Contact me"
          subtitle="Feel free to reach out for collaborations or just a friendly hello 😊"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg">
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent className="p-3 flex flex-col items-center text-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {contact.icon}
                    </div>
                    <h3 className="font-medium">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
