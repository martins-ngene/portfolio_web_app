import Link from "next/link";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles.module.css";
import { sendMessage } from "@/components/helpers";
import { contactInfo } from "@/components/types";
import Section from "../section";
import { contact_links } from "@/components/constants";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("This field is required"),
    message: yup.string().required("This field is required"),
  })
  .required();

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation: any = useMutation({ mutationFn: sendMessage });

  const submitForm = (contactInfo: contactInfo) => {
    // Send form data to endpoint
    mutation.mutate(contactInfo);
    // Clear the form
    reset();
  };

  return (
    <Section id='contact'>
      <form className={styles.container} onSubmit={handleSubmit(submitForm)}>
        <div>
          <div className={styles.header}>Get in touch</div>
          <div className={styles.fragments_container}>
            <div className={styles.column_one}>
              <div className={styles.name_container}>
                <label className={styles.label} htmlFor='name'>
                  Name
                </label>
                <input
                  className={styles.input}
                  id='name'
                  placeholder='Enter your name'
                  type='text'
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className={styles.email_container}>
                <label className={styles.label} htmlFor='email'>
                  Email
                </label>
                <input
                  className={styles.input}
                  id='email'
                  placeholder='Enter your email'
                  type='email'
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </div>

              <div>
                <label htmlFor='message' className={styles.textLabel}>
                  Message
                </label>
                <textarea
                  className={styles.textArea}
                  id='message'
                  placeholder='Enter your message'
                  {...register("message")}></textarea>
                <p>{errors.message?.message}</p>
              </div>
              <p>
                {mutation.isLoading
                  ? "Message is sending ..."
                  : mutation.isSuccess
                  ? "Message is sent successfully"
                  : mutation.isError
                  ? "Please reload the page and try again"
                  : ""}
              </p>

              <div className='mt-6'>
                <button className={styles.submit_btn} type='submit'>
                  Submit
                </button>
              </div>
            </div>

            <div className={styles.column_two}>
              <p className={styles.welcome_text}>
                Do you have an idea I could help you actualise, a project you
                need my expertise on or just a casual coffee chat? Hit me up,
                let's talk!
                <br /> <br />
                Don't forget to connect with me on my social media handles, I
                share knowledge and insights that you will find helpful.
              </p>

              <div className={styles.links_container}>
                {contact_links.map((link, index) => {
                  return (
                    <Link
                      className={styles.contact_link}
                      key={index}
                      href={link.link}
                      passHref>
                      <div className={styles.contact_link_icon}>
                        <Image alt={link.name} src={link.icon} fill />
                      </div>
                      <span className={styles.contact_link_name}>
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
