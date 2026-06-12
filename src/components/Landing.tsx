const sections = [
  { label: "Hero",        bg: "bg-rose-900" },
  { label: "About",       bg: "bg-indigo-900" },
  { label: "Services",    bg: "bg-emerald-900" },
  { label: "Work",        bg: "bg-amber-900" },
  { label: "Process",     bg: "bg-cyan-900" },
  { label: "Team",        bg: "bg-violet-900" },
  { label: "Testimonials",bg: "bg-teal-900" },
  { label: "Contact",     bg: "bg-fuchsia-900" },
];

export default function Landing() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sections.map(({ label, bg }) => (
        <section
          key={label}
          className={`${bg} h-screen w-full snap-start flex items-center justify-center`}
        >
          <h2 className="text-white text-4xl font-bold">{label}</h2>
        </section>
      ))}

      <footer className="bg-neutral-950 h-screen w-full snap-start flex items-center justify-center">
        <p className="text-white text-sm tracking-widest">© MND</p>
      </footer>
    </div>
  );
}
