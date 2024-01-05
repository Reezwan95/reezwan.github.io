import React from "react";
import "./Contact.css"; // Ensure this points to your CSS file

export default function Contact() {
  return (
    <section id="contact" className="editor-theme">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="code-section bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <p className="code-comment">// Contact Information</p>
          <p className="code-line">
            <span className="code-keyword">public</span>{" "}
            <span className="code-keyword">String</span> address = 
            <span className="code-string"> "Toronto, Ontario, Canada"</span>;
          </p>
          <p className="code-line">
            <span className="code-keyword">public</span>{" "}
            <span className="code-keyword">String</span> email = 
            <span className="code-string"> "reezwan.sami@mail.utoronto.ca"</span>;
          </p>
          <p className="code-line">
            <span className="code-keyword">public</span>{" "}
            <span className="code-keyword">String</span> phone = 
            <span className="code-string"> "(437) 985-6993"</span>;
          </p>
        </div>
        <form
          netlify
          name="contact"
          className="form-editor bg-gray-800 text-white p-6 mt-6 md:mt-0 md:ml-6 rounded-lg shadow-lg flex flex-col"
        >
          <p className="code-comment">// Enter your contact details</p>
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              System.out.print("Name: ");
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              System.out.print("Email: ");
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="message" className="input-label">
              System.out.print("Message: ");
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hello, I would like to..."
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            System.out.println("Submit");
          </button>
        </form>
      </div>
    </section>
  );
}
