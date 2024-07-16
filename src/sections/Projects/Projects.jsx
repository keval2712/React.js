import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="e commerce site"
          p="Book Shop App"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/keval2712/React/tree/main/my-app"
          h3="text edit"
          p="Text-utils"
        />
              <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="sample resume"
          p="portfolio"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
