import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const response = await request.formData()
    const data =  Object.fromEntries(response);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error)
  }
}

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <Form method="POST" action="/contact"  className="contact-form">
        <label htmlFor="username">full name</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          autoComplete="off"
          placeholder="enter full name"
        />

        <label htmlFor="email">email address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          placeholder="abc@patil.com"
        />

        <div className="mb-3">
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message "
            cols="30"
            rows="10"
            placeholder="we are always here to help you."
          ></textarea>
        </div>

        <button type="submit" className="btn contact-btn">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default Contact;
