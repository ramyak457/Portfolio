export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-gray-200 flex flex-col items-center justify-center px-6 sm:px-12 py-16"
    >
    <div></div>
      {/* Dual-color heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center">
        <span className="bg-gradient-to-r from-teal-500 to-blue-400 text-transparent bg-clip-text">About</span>{" "}
        <span className="bg-gradient-to-r from-blue-500 to-sky-900 text-transparent bg-clip-text">Me</span>
      </h2>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Left side — about text */}
        <div className="space-y-4 text-left text-lg leading-relaxed">
          <p>
            I’m a <span className="text-blue-400 font-semibold">.NET Full Stack Developer </span> 
            with over 5 years of experience in the software industry, working across retail, healthcare, and finance domains. I’m passionate about transforming ideas into impactful, real-world solutions through clean design and efficient code.
          </p>
          <p>
            I work across the full stack — building scalable backends and responsive frontends, while leveraging cloud technologies to enhance performance and security. I’m always eager to learn and grow, with a current focus on applying AI to solve real-world challenges.
          </p>        
        </div>

        {/* Right side — expertise box */}
        <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-10 shadow-lg hover:shadow-blue-500/20 transition">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-400">
            Expertise Areas
          </h3>
          <ul className="space-y-3 text-base">
            <li>
              <span className="text-pink-400 font-medium">●</span> Full Stack Development
            </li>
            <li>
              <span className="text-amber-400 font-medium">●</span> Cloud Integration (AWS)
            </li>
            <li>
              <span className="text-green-400 font-medium">●</span> REST API Design & Architecture
            </li>
            <li>
              <span className="text-cyan-400 font-medium">●</span> Machine Learning Integration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
