import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles.module.css";
import { sendMessage } from "@/components/helpers";
import { contactInfo } from "@/components/types";

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
    <form className={styles.container} onSubmit={handleSubmit(submitForm)}>
      <div>
        <div className={styles.header}>Get in touch</div>
        <div>
          <p className={styles.welcome_text}>
            Looking to integrate <strong>Auto Blog AI</strong> in your product
            to automate usage guides and documentation or just to have a casual
            meeting? Fill out the form below so we can get started!
          </p>
          <div className={styles.name_container}>
            <div className={styles.column_one}>
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
            <div className={styles.column_two}>
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

          <div className='mt-2'>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
