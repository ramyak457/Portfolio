export default function Skills(){
    return(
    <section id="skills" className="min-h-screen flex flex-col bg-slate-950 items-center justify-center my-[-2] mx-10 px-6 py-12" >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center w-full">
            <span className="bg-gradient-to-r from-teal-500 to-indigo-400 text-transparent bg-clip-text">Skills </span>
            <span className="bg-gradient-to-r from-teal-400 to-green-400 text-transparent bg-clip-text">& </span>
            <span className="bg-gradient-to-r from-indigo-400 to-green-300 text-transparent bg-clip-text">Technologies</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl w-full">
            {/* Skill items */}
            {/* Languages */}
            <div className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 rounded-2xl p-6 shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Languages</h3>
            <ul className="space-y-2 text-gray-300">
                <li>C#</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Python</li>
            </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 rounded-2xl p-6 shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Frameworks</h3>
            <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>.NET Core Web API</li>
                <li>ASP.Net</li>
                <li>Tailwind CSS</li>
            </ul>
            </div>

            {/* Tools */}
            <div className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 rounded-2xl p-6 shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Tools</h3>
            <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>Jenkins/Octopus</li>
                <li>AWS S3</li>
            </ul>
            </div>

            {/* Specializations */}
            <div className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 rounded-2xl p-6 shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-pink-400 mb-3">Specializations</h3>
            <ul className="space-y-2 text-gray-300">
                <li>Full Stack Development</li>
                <li>Cloud Integration</li>
                <li>API Design</li>
                <li>Machine Learning</li>
            </ul>
            </div>
        </div>
    </section>
    );
}