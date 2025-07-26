import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="connect" className="mb-8 md:mb-12">
      <div className="bg-background border-2 border-foreground p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-foreground pb-2 mb-6 tracking-wide">
          PROFESSIONAL CONTACT
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-foreground pb-1">
              GET IN TOUCH
            </h3>
            <div className="mb-4">
              <img
                src="/images/contact.png"
                alt="Contact"
                className="w-full h-32 object-cover border boder-muted-foreground"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Interested in collaborating on innovative projects or discussing
              development opportunities? Let's build something remarkable
              together.
            </p>
            <div className="space-y-3">
              <Link
                target="_blank"
                href="mailto:johndibashi@gmail.com"
                className="flex items-center gap-3 text-sm hover:underline"
              >
                <Mail size={16} />
                johndibashi@gmail.com
              </Link>
              <Link
                target="_blank"
                href="https://github.com/kyng-cytro"
                className="flex items-center gap-3 text-sm hover:underline"
              >
                <Github size={16} />
                github.com/kyng-cytro
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/john-dibashi"
                className="flex items-center gap-3 text-sm hover:underline"
              >
                <Linkedin size={16} />
                linkedin.com/in/john-dibashi
              </Link>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} />
                +2347065117614
              </div>
            </div>
          </div>
          <div className="border-l-0 lg:border-l-2 border-t-2 lg:border-t-0 border-foreground pt-4 lg:pt-0 lg:pl-6">
            <h3 className="font-bold text-lg mb-4 border-b border-foreground pb-1">
              AVAILABILITY
            </h3>
            <div className="text-sm space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-bold">9:00 AM - 11:59 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-bold">10:00 AM - 11:59 PM</span>
              </div>
            </div>
            <div className="text-xs space-y-2">
              <p>
                <span className="font-bold">Response Time:</span> Usually within
                5 mintues
              </p>
              <p>
                <span className="font-bold">Time Zone:</span> West Africa Time
                (WAT)
              </p>
              <p>
                <span className="font-bold">Preferred Contact:</span> Email for
                detailed discussions
              </p>
            </div>
            <div className="mt-4 bg-muted p-3 border border-muted-foreground text-xs">
              <span className="font-bold">CURRENT STATUS:</span> Available for
              new projects and consulting opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
