import './contact.styles.scss';
//react hooks
import React from "react";
import { useState } from "react";

//supabase
import { supabase } from "../../lib/supabaseClient";

//pagewrapper for general screen transitions
import PageWrapper from "../../layouts/PageWrapper/pagewrapper";


type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {

    const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || null,
          message: form.message.trim(),
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      {/* <Navbar /> */}
      <main className="contact">
        <section className="contact-hero">
          <div className="contact-hero__inner">
            <div className="contact-hero__content">
              <p className="contact-hero__kicker">CONTACT</p>
              <h1 className="contact-hero__title">Contact Me</h1>
              <p className="contact-hero__subtitle">
                If you have a project, an order, or any questions, send the
                details below.
              </p>
            </div>

            <form className="contact-card" onSubmit={onSubmit}>
              <div className="contact-card__row">
                <label>
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label>
                Subject (optional)
                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Order / Project / Question"
                />
              </label>

              <label>
                Details
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={7}
                  placeholder="Write your details here..."
                />
              </label>

              <button className="contact-card__btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="contact-card__ok">
                  Submitted successfully. Thank you.
                </p>
              )}
              {status === "error" && (
                <p className="contact-card__err">
                  Failed to submit. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Contact;
