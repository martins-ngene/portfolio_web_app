import React from "react";

import styles from "./styles.module.css";
import Section from "../section";
import { skills_schema } from "@/components/constants";
import Tag from "@/components/tags";

const Skills = () => {
  return (
    <Section id='skills' header='Skills'>
      <div className={styles.skills_container}>
        <div className={styles.column_one}></div>
        <div className={styles.column_two}>
          {skills_schema.map((section, index: number) => {
            return (
              <div key={index}>
                <h1 className={styles.skills_section_name}>
                  {section.section_name}
                </h1>
                <div className={styles.skills_container}>
                  {section.tags.map((skill, index: number) => {
                    return <Tag key={index} tag_name={skill} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
