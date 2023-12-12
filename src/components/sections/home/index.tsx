import Image from "next/image";

import styles from "./styles.module.css";
import { Button } from "@/components/buttons";
import Tag from "@/components/tags";
import { skills_schema } from "@/components/constants";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.column_one}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src='/profile.jpg'
            alt='profile'
            width={400}
            height={400}
          />
        </div>
        <h1 className={styles.header}>
          Hi, I'm <strong>Martins Ngene</strong>, a{" "}
          <strong>Software Developer</strong>. I manifest success in whatever I
          build.
        </h1>

        <p className={styles.welcome_text}>
          I have been in the industry for 3 years with in-depth experience in
          working for early stage startups both locally and internationally.
        </p>

        <p className={styles.welcome_text}>
          With strong command in JavaScript / TypeScript, I build web
          applications using cutting edge technologies like: React.js / Next.js,
          Node.js / Express.js, PostgreSQL and MongoDB. I'm open to explore
          opportunities and actively seearching for engagements. Find my resume
          and github in the buttons below.
        </p>

        <div className={styles.btn_container}>
          <Button href='/sign_up' label='View Resume' isFilled />
          <Button href='/sign_in' label='Github Profile' isFilled={false} />
        </div>
      </div>
      <div className={styles.column_two}>
        {skills_schema.map((section, index) => {
          return (
            <div>
              <h3 className={styles.section_name} key={index}>
                {section.section_name}
              </h3>
              <div className={styles.tag_container}>
                {section.tags.map((tag, index) => {
                  return <Tag key={index} tag_name={tag} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
