import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import back from "../assets/back.jpg"

function Projects() {
  const projects = [
    {
      title: "Inky Box",
      description:
        "Developed a modern stationery eCommerce website with an interactive and responsive UI, enabling users to browse, search, and purchase stationery items seamlessly.",
      tech: ["React js", "HTML/CSS"],
      github: "https://github.com/aku-S7",
      demo: "https://demo.com",
    },
    {
      title: "Pizza Sales Analysis",
      description:
        "Analyzed pizza sales data using SQL for data insights and created interactive Power BI dashboards to visualize sales trends, top products, and performance metrics.",
      tech: ["SQL", "Power BI"],
      github: "https://github.com/aku-S7",
      demo: "https://demo.com",
    },
    {
      title: "Genius Guide Consultant",
      description:
      "A consultancy platform where clients and candidates connect for recruitment and staffing services, ensuring efficient communication and seamless hiring solutions.", 
      tech: ["React.js"],
      github: "https://github.com/aku-S7",
      demo: "https://demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[rgba(243,238,234,1)]" style={{ backgroundImage: `url(${back})` }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="relative text-3xl font-bold text-center mb-12 font-[cursive] group w-[15%] ml-auto mr-auto">
          Projects
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#7d685e] transform scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ScrollAnimationWrapper key={project.title}>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105  h-full">
                <h3 className="font-bold text-xl mb-2 bg-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 bg-white">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 bg-white">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 bg-white">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(125, 113, 94, 1)] hover:text-black bg-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(125, 113, 94, 1)] hover:text-black bg-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
