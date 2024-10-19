
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, image }) => { 
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">See more →</a>
    </div>
  );
};

// Define prop-types to validate the props passed into the component
ProjectCard.propTypes = {
  title: PropTypes.string,  // Optional
  description: PropTypes.string,
  image: PropTypes.string,
};


export default ProjectCard;
