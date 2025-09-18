'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Code, Database, GitMerge, Server, Cog, Users, Download, MapPin, Gamepad2, ChartBar, Table2, AppWindow, ClipboardCheck, Send } from 'lucide-react';

const basePath = process.env.basePath || '';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="group flex items-center py-3">
    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
      {children}
    </span>
  </a>
);

const ProjectCard = ({ name, description, tags, url }: { name: string; description: string; tags: string[]; url?: string }) => (
  <div className="group relative grid gap-4 pb-1 mb-8 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-200">
        <div>
          <a href={url || '#'} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{name}</span>
          </a>
        </div>
      </h3>
      <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
      <ul className="mt-2 flex flex-wrap">
        {tags.map(tag => (
          <li key={tag} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tag}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TimelineItem = ({ date, title, subtitle, description, logoUrl, isLast }: { date: string; title: string; subtitle: string; description: string; logoUrl: string; isLast?: boolean }) => (
    <div className="relative flex items-start">
        <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700">
                <Image src={`${basePath}${logoUrl}`} alt={`${subtitle} logo`} className="w-8 h-8 object-contain" width={32} height={32} />
            </div>
            {!isLast && <div className="w-px h-24 bg-slate-600 mt-2"></div>}
        </div>
        <div className="bg-slate-800/50 p-4 rounded-md flex-1">
            <p className="text-sm text-slate-400 mb-1">{date}</p>
            <h3 className="font-bold text-slate-200">{title}</h3>
            <h4 className="text-sm font-medium text-teal-300 mb-2">{subtitle}</h4>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    </div>
);

const SkillPill = ({ name, icon: Icon }: { name: string; icon: React.ElementType }) => (
    <div className="flex items-center rounded-md bg-blue-400/10 px-3 py-1.5 text-sm font-medium text-blue-300">
        <Icon className="mr-2 h-4 w-4" />
        {name}
    </div>
);


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const timelineData = [
    {
        date: "Present",
        title: "Future Role",
        subtitle: "To be determined",
        description: "Open to new opportunities and challenges.",
        logoUrl: "/future.svg",
    },
    {
        date: "Jul – Oct 2025",
        title: "Senior Team Leader (Intern)",
        subtitle: "UpToSkills",
        description: "Managed a team of 14 on a FinTech project, utilizing an AI chatbot and performing financial data analysis with Pandas and PostgreSQL.",
        logoUrl: "/uptoskills.svg",
    },
    {
        date: "Sept 2023 – Sept 2027",
        title: "B.Tech (ECE)",
        subtitle: "ADGIPS",
        description: "Achieved an overall 8.5 CGPA",
        logoUrl: "/adgips.svg",
    },
    {
        date: "2022",
        title: "12th Grade",
        subtitle: "CBSE",
        description: "Achieved 80% marks.",
        logoUrl: "/cbse.png",
        isLast: true,
    },
  ];

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="w-48 h-48 rounded-full bg-slate-700 mb-4">
                <Image src={`${basePath}/profile.png`} alt="Profile Picture" className="rounded-full" width={192} height={192} />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Kanishk Kumar Mishra</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">DevOps Engineer</h2>
              <div className="mt-4">
                <p className="text-sm text-slate-400">21 Years old</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                I build and maintain the infrastructure that powers modern web applications.
              </p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li><NavLink href="#about">About</NavLink></li>
                  <li><NavLink href="#skills">Skills</NavLink></li>
                  <li><NavLink href="#experience">Experience</NavLink></li>
                  <li><NavLink href="#projects">Projects</NavLink></li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 shrink-0"><a href="https://github.com/KanishkMishra143" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200"><Github className="h-6 w-6" /></a></li>
              <li className="mr-5 shrink-0"><a href="https://www.linkedin.com/in/kanishk-kumar-83603b194/" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200"><Linkedin className="h-6 w-6" /></a></li>
              <li className="mr-5 shrink-0"><a href="mailto:kanishk.kumar412@gmail.com" className="block hover:text-slate-200"><Mail className="h-6 w-6" /></a></li>
              <li className="mr-5 shrink-0"><a href="https://drive.google.com/uc?export=download&id=1e3BeJaku3GVcVwqTMzeEfi7uQrbbEm9i" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-300 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50" download="Kanishk_Mishra_CV.pdf"><Download className="h-4 w-4" /><span>Download CV</span></a></li>
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">About Me</h2>
              <p className="leading-relaxed text-slate-400">
                I&apos;m a 22-year-old DevOps Engineer with a passion for Linux, scripting, and automation. My experience in startup environments has taught me to be adaptable and resourceful, with a strong focus on creating efficient and scalable systems. I thrive on solving complex problems and enjoy delving into system-level customization to optimize for performance and productivity.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-300">Interests & Hobbies</h3>
                <ul className="list-disc list-inside mt-2 text-slate-400">
                  <li>Exploring niche related to FOSS and Linux</li>
                  <li>FOSS Contribution</li>
                  <li>Manga & Manhwa</li>
                </ul>
              </div>
            </section>

            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">Skills</h2>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-slate-300 mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill name="Python" icon={Code} />
                        <SkillPill name="HTML" icon={Code} />
                        <SkillPill name="CSS" icon={Code} />
                        <SkillPill name="C++" icon={Code} />
                        <SkillPill name="Bash" icon={Code} />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-slate-300 mb-2">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill name="Django" icon={Server} />
                        <SkillPill name="Flask" icon={AppWindow} />
                        <SkillPill name="Pandas" icon={Table2} />
                        <SkillPill name="Matplotlib" icon={ChartBar} />
                        <SkillPill name="PyGame" icon={Gamepad2} />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-slate-300 mb-2">Backend & Databases</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill name="PostgreSQL" icon={Database} />
                        <SkillPill name="SQLite" icon={Database} />
                        <SkillPill name="REST APIs" icon={AppWindow} />
                        <SkillPill name="Node.Js" icon={AppWindow} />
                    </div>
                </div>
                 <div className="mt-4">
                    <h3 className="text-lg font-semibold text-slate-300 mb-2">Practices & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill name="Git" icon={GitMerge} />
                        <SkillPill name="Agile" icon={Users} />
                        <SkillPill name="Microservices" icon={Server} />
                        <SkillPill name="Jira" icon={ClipboardCheck} />
                        <SkillPill name="Postman" icon={Send} />
                    </div>
                </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">Experience</h2>
                <div>
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">Projects</h2>
              <div className="group/list">
                <ProjectCard 
                  name="Custom Linux Setup" 
                  description="A personalized productivity environment using Hyprland, Eww, and various automation scripts to streamline development workflows."
                  tags={['Linux', 'Hyprland', 'Eww', 'Shell Scripting']}
                />
                <ProjectCard 
                  name="Sink Switch CLI Tool"
                  description="A command-line utility for quickly switching audio output devices in Linux, published on Fedora COPR and Arch AUR."
                  tags={['Python', 'CLI', 'Fedora COPR', 'Arch AUR']}
                />
                <ProjectCard 
                  name="API Testing & Bug Reporting"
                  description="A personal project to practice and document API testing methodologies and formal bug reporting procedures using tools like Postman and Jira."
                  tags={['API Testing', 'Postman', 'Jira']}
                />
              </div>
            </section>


          </main>
        </div>
      </div>
    </>
  );
}
