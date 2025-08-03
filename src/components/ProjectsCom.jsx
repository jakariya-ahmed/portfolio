import Image from '../assets/img/jakariya.jpg';
import img from '../assets/img/img.jpg';
import img2 from '../assets/img/img-1.jpg';
import img3 from '../assets/img/img-2.jpg';
import img4 from '../assets/img/img-3.jpg';
import img5 from '../assets/img/img-4.jpg';

const projects = [
  {
    title: "Portfolio Website",
    image: img,
    description: "A personal portfolio to showcase development skills, projects, and resume.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://your-portfolio.com",
    sourceLink: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-Commerce Store",
    image: img2,
    description: "An online shopping platform with product filters, cart, and checkout integration.",
    tech: ["Next.js", "Tailwind CSS", "Stripe"],
    liveLink: "https://your-ecommerce.com",
    sourceLink: "https://github.com/your-username/ecommerce-store",
  },
  {
    title: "Blog Platform",
    image: img3,
    description: "A full-featured blog with markdown editor, comments, and authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://your-blog.com",
    sourceLink: "https://github.com/your-username/blog-platform",
  },
    {
    title: "Blog Platform",
    image: img4,
    description: "A full-featured blog with markdown editor, comments, and authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://your-blog.com",
    sourceLink: "https://github.com/your-username/blog-platform",
  },
  ,
    {
    title: "Blog Platform",
    image: img5,
    description: "A full-featured blog with markdown editor, comments, and authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://your-blog.com",
    sourceLink: "https://github.com/your-username/blog-platform",
  },
];



export default function Projects() {
return (
    <section className="py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"><span className='text-secondary'>Featured</span> Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card p-0 backdrop-blur-md rounded-sm overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl text-white font-semibold">{project.title}</h3>

              <p className="text-sm text-gray-300 mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-secondary rounded-full px-2 py-1 text-heading
                        hover:text-secondary hover:border-white transition
                    ">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                >
                  Live
                </a>
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white border border-white/20 hover:border-white hover:bg-white/10 transition rounded"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}