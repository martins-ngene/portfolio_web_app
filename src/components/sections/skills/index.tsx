import React from "react";

import styles from "./styles.module.css";
import Section from "../section";
import { skills_schema } from "@/components/constants";
import Tag from "@/components/tags";

const Skills = () => {
  return (
    <Section id='skills'>
      <div className={styles.skills_container}>
        {skills_schema.map((section, index: number) => {
          return (
            <div key={index}>
              {section.section_name}
              <div className={styles.skills_container}>
                {section.tags.map((skill, index: number) => {
                  return <Tag key={index} tag_name={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
