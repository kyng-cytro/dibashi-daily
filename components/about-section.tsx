import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="mb-8 md:mb-12">
      <div className="bg-background border-2 border-foreground p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-foreground pb-2 mb-4 tracking-wide">
          FULLSTACK SOFTWARE DEVELOPER
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-32 md:h-32 w-24 h-24 mx-auto md:mx-0 flex-shrink-0">
                <Image
                  width={150}
                  height={150}
                  src="/images/logo.gif"
                  alt="John U. Dibashi - Full-Stack Developer"
                  className="w-full h-full object-cover border-2 border-foreground"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  John U. Dibashi
                </h3>
                <div className="text-sm space-y-1 mb-3">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin size={14} />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone size={14} />
                    <span>+2347065117614</span>
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-xl">J</span>ohn U. Dibashi is
                  a seasoned full-stack software developer with over 5 years of
                  experience building scalable web applications and systems.
                  Based in Lagos, he specializes in creating efficient solutions
                  that drive business growth and enhance user experiences. His
                  expertise spans modern web technologies and he has a proven
                  track record of delivering high-impact projects.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-foreground pt-4">
              <p className="text-sm leading-relaxed">
                <span className="font-bold">EXCLUSIVE SCOOP:</span> Sources
                confirm John has successfully deployed to production without
                breaking anything... twice! He specializes in making computers
                do exactly what they're supposed to do, which is apparently
                harder than it sounds.
              </p>
            </div>
          </div>
          <div className="border-l-0 lg:border-l-2 border-t-2 lg:border-t-0 border-foreground pt-4 lg:pt-0 lg:pl-6">
            <h3 className="font-bold text-lg mb-3 border-b border-foreground pb-1">
              TECHNICAL EXPERTISE
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-bold">Programming Languages:</h4>
                <p>JavaScript, TypeScript, Python, HTML, CSS, PHP</p>
              </div>
              <div>
                <h4 className="font-bold">Frameworks & Libraries:</h4>
                <p>Node.js, Nuxt.js, Vue.js, Hono.js, Express.js, Zod</p>
              </div>
              <div>
                <h4 className="font-bold">Technologies & Tools:</h4>
                <p>
                  MySQL, PostgreSQL, Docker, Git, GitHub, Linux, Postman, Neovim
                </p>
              </div>
              <div>
                <h4 className="font-bold">Specializations:</h4>
                <p>
                  SEO Optimization, RESTful APIs, Responsive Design, Web
                  Performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
