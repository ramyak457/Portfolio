import { useState } from "react";
import { ExternalLink, ExpandIcon, X} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSlide, setShowSlide] = useState(false);

  const projects = [
    {
      name: "Walmart – Connexus Application",
      description:
        "Developed REST APIs using C# and .NET for secure data transfer between Walmart’s mobile app and backend systems to manage immunization records efficiently.",
      tech: "C#, .NET, SQL, WCF, REST APIs, Microservices",
      slideUrl: "https://docs.google.com/presentation/d/1RooQc2abSjeJYwOrnieLbeD6iWhE3baP6k5Kg6WieuE/edit?slide=id.g373d0856452_0_1480#slide=id.g373d0856452_0_1480",
      details:
        "Connexus is a WinForms desktop application used by Walmart Pharmacy for prescription processing. I contributed to the development using C# .NET, WCF, ADO.NET, and SOAP services, focusing on improving efficiency and reliability in pharmacy operations." + "\n" +
        "To optimize performance, I implemented parallel programming techniques in the development of REST APIs, significantly enhancing data transfer efficiency and reducing response times. My work helped improve the overall responsiveness and scalability of the application.",
    },
    {
      name: "Fidelity – eMoney Platform",
      description:
        "Contributed to the development and optimization of a financial planning platform by maintaining and enhancing the Vault module, ensuring data security and performance. Supported the migration of the data lake from on-premises to cloud to improve scalability and analytical efficiency.",
      tech: "C#, ASP.NET MVC, Javascript, Bash, AWS S3, SQL",
      slideUrl: "https://docs.google.com/presentation/d/15Fk9S1FVdR135BbN--ctYF3g6EaXN_zWaIpkTGt2rhg/edit?slide=id.g371ec9a35e3_0_7#slide=id.g371ec9a35e3_0_7",
      details:
        "eMoney is a comprehensive financial planning platform that helps clients achieve their financial goals through effective planning, analysis, and informed decision-making. I worked on the Vault module, a secure storage repository within the platform, where I was responsible for maintenance, performance optimization, and feature enhancements to ensure data confidentiality, integrity, and high availability." + "\n" +
        "In addition, I contributed to the migration of the data lake from on-premises infrastructure to the cloud, enabling improved data accessibility, scalability, and analytical capabilities.",
    },
    {
      name: "MAG – Partner Portal",
      description:
        "Designed and implemented Partner-Portal, a Beverage Distribution Application for internal sales and management teams, enabling efficient inventory tracking, order processing, and automated invoice generation.",
      tech: "React, SQL, .NET, AWS, Lambda, EventScheduler",
      slideUrl: "https://docs.google.com/presentation/d/1F1hfaZz9PoXw4At8GcTl2ysxfVYCkEg_Lt28tdcAsuA/edit?slide=id.g373ef677c46_0_441#slide=id.g373ef677c46_0_441",
      details:
        "Partner Portal is a Beverage Distribution Application developed for inventory tracking and automated invoice generation. I contributed to enhancing and modernizing the application by migrating and optimizing cloud components using AWS Event Scheduler and Lambda functions. My work focused on improving database performance, enhancing the media gallery with advanced validation checks, and streamlining the invoice generation process through serverless automation, resulting in improved efficiency and scalability.",
    },
    {
      name: "Public API → GraphQL Project",
      description:
        "Converts public REST API into a dynamic GraphQL endpoint for flexible data querying.",
      tech: "GraphQL, C#, .NET, REST APIs",
      slideUrl: "https://github.com/ramyak457/PublicAPIToGraphQL/tree/master",
      details:
        "Converts Canada Holidays API to a GraphQL API to retrieve information about Canadian holidays, population statistics, and province-related data, improving flexibility and efficiency in data retrieval." ,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-16" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center">
        <span className="bg-gradient-to-r from-teal-500 to-sky-400 text-transparent bg-clip-text">My </span>
        <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">Projects</span> 
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <p className="text-xs text-blue-300 font-mono">{project.tech}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-blue-400 rounded-2xl shadow-xl p-8 w-11/12 md:w-1/2 lg:w-2/5 relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute bg-slate-800 hover:bg-blue-600 rounded-lg top-3 right-4 text-gray-300 hover:text-white text-xl"
            >
              <X className="w-5 h-5" />
            </button>      

            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              {selectedProject.name}
            </h3>
            <p className="text-gray-300 mb-3">{selectedProject.details}</p>
            <p className="text-sm text-blue-300 font-mono">{selectedProject.tech}</p>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-slate-800 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Close
              </button>
              {selectedProject.name === "Public API → GraphQL Project" ? (
                <a
                    href="https://github.com/ramyak457/PublicAPIToGraphQL/tree/master"
                    target="_blank"
                    className="flex items-center bg-slate-800 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-200"
                >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Code on GitHub
                </a>
                ) : (
                <button
                    onClick={() => setShowSlide(true)}
                    className="flex items-center bg-slate-800 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-200"
                >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Overview
                </button>
            )}

            </div>

            {showSlide && selectedProject && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                <div className="bg-slate-900 border border-blue-400 rounded-xl p-4 w-[90%] max-w-3xl h-[70vh] relative shadow-xl">
                    <iframe
                        src={selectedProject.slideUrl}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        title="Project Architecture Slide"
                    ></iframe>
                    <button
                        onClick={() => setShowSlide(false)}
                        className="absolute top-3 right-3 bg-blue-600 hover:text-white px-2 py-1 rounded-full text-xl"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setShowSlide(false)}
                        className="absolute top-3 right-10 bg-blue-600 text-gray-300 hover:text-white px-2 py-1 mx-5 rounded-full text-xl"
                    >
                        <ExpandIcon className="w-4 h-4" onClick={() => window.open(selectedProject.slideUrl.replace("/embed?", "/preview?"), "_blank")}/>
                    </button> 
                </div>
            </div>
            )}
         </div>
        </div>
      )}
    </section>
  );
}
