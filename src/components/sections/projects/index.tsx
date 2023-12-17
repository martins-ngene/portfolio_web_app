import Card from "@/components/card";
import styles from "./styles.module.css";
import { projects } from "@/components/mock";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              src={project.image}
              title={project.name}
              alt={project.name}
              className='w-full mb-6'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
