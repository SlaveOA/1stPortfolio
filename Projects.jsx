import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Simplest Working Calculator', description: <a href="https://github.com/SlaveOA/SimplestCalculator"></a> },
    
  ];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
