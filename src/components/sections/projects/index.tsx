import Card from "@/components/card";
import styles from "./styles.module.css";
import { projects } from "@/components/mock";

const Projects = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              src={project.image}
              name={project.name}
              alt={project.name}
              className='w-full mb-6'
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
