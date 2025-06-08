import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>Name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Message: <textarea /></label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
