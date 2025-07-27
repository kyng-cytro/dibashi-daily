import Image from "next/image";

export function EducationSection() {
  return (
    <section className="mb-8 md:mb-12">
      <div className="bg-background border-2 border-foreground p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-foreground pb-2 mb-6 tracking-wide">
          EDUCATIONAL BACKGROUND
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-48 flex-shrink-0">
            <Image
              width={200}
              height={200}
              src="/images/uni-ilorin.jpg"
              alt="University of Ilorin"
              className="w-full h-32 md:h-48 object-cover border border-foreground"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Science in Information Science
            </h3>
            <p className="font-semibold mb-2">
              University of Ilorin • Ilorin, Kwara State
            </p>
            <p className="text-sm mb-3">
              <span className="font-bold">Graduated:</span> October 2023
            </p>
            <p className="text-sm leading-relaxed">
              Comprehensive study of information systems, data management, and
              computational theory. The program provided a strong foundation in
              software development principles, database design, and system
              analysis that directly supports current professional practice.
            </p>
            <div className="mt-4 text-xs bg-muted p-3 border border-muted-foreground">
              <span className="font-bold">ACADEMIC FOCUS:</span> Information
              Systems Design, Database Management, Software Engineering
              Principles, and Web Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
