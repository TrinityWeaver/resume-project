import React from "react";
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    const templateParams = {
      from_name: data.name,
      to_name: "Sebastian Marynicz",
      subject: data.subject,
      message: data.comment,
      reply_to: data.email
    }
    send("service_ce1yw6v","template_jj21bu9", templateParams, "TeMXm9erPXHECphLv")
    .then((result) => {
      console.log(result.text);
    })
    .catch((error) => {
      console.log(error.text);
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
