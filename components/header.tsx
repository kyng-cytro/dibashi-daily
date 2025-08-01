import { ColorSwitcher } from "@/components/color-switcher";

export function Header() {
  return (
    <header className="border-b-4 border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        <div className="text-center border-b-2 border-foreground pb-4 mb-4">
          <h1 className="text-3xl md:text-6xl font-bold tracking-wider">
            THE DIBASHI DAILY
          </h1>
          <p className="text-xs md:text-sm tracking-widest mt-2 uppercase">
            LAGOS EDITION • 6 MIN READ • <ColorSwitcher />
          </p>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-xs md:text-sm font-bold tracking-wide">
          <a href="#about" className="hover:underline py-1 transition-colors">
            ABOUT
          </a>
          <a
            href="#experience"
            className="hover:underline py-1 transition-colors"
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className="hover:underline py-1 transition-colors"
          >
            PROJECTS
          </a>
          <a href="#connect" className="hover:underline py-1 transition-colors">
            CONNECT
          </a>
        </nav>
      </div>
    </header>
  );
}
