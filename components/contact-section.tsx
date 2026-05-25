import { Mail } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import Image from "next/image";
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
              <Image
                width={620}
                height={200}
                alt="Contact"
                src="/images/contact.png"
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
                <GithubIcon size={16} />
                github.com/kyng-cytro
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/john-dibashi"
                className="flex items-center gap-3 text-sm hover:underline"
              >
                <LinkedinIcon size={16} />
                linkedin.com/in/john-dibashi
              </Link>
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
