import Experience from "@/components/Experience";
import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import Animation from "@/components/Animation";

export default function Home() {
  return (
    <div className=" text-white min-h-screen flex">
      <Sidebar />
      <main className="ml-64 w-full bg-slate-900">
        <Animation>
          <Section id="about" title="About">
            <p className="text-slate-300">
              Write something about yourself here.
            </p>
          </Section>
        </Animation>
        <Animation>
          <Section id="experience" title="Experience">
            <Experience />
          </Section>
        </Animation>
        <Animation>
          <Section id="projects" title="Projects">
            <p className="text-slate-300">Projects go here.</p>
          </Section>
        </Animation>
      </main>
    </div>
  );
}
