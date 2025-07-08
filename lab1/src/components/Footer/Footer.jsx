import './Footer.css';

function Footer({  contact }) {
    return(
      <>
    <section id="contact" className="footer-section">
      <div className="footer-container">
        <h2 className="footer-title">Get in Touch</h2>
        <p className="footer-subtitle">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <div className="footer-links">
          {/* Email */}
          <a href={`mailto:${contact.email}`} className="footer-button">
            <svg viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            {contact.email}
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.815 1.229 1.815 1.229 1.064 1.816 2.808 1.299 3.492.993.108-.775.418-1.299.762-1.599-2.665-.3-5.466-1.332-5.466-5.93 0-1.312.465-2.387 1.229-3.22-.124-.3-.535-1.524.118-3.176 0 0 1-.322 3.298 1.229.944-.262 1.94-.392 2.934-.392 1 0 1.988.13 2.934.392 2.297-1.551 3.298-1.229 3.298-1.229.653 1.653.242 2.876.118 3.176.766.833 1.229 1.908 1.229 3.22 0 4.61-2.801 5.625-5.476 5.922.429.369.812 1.104.812 2.227v3.293c0 .319.192.694.801.576C20.565 21.792 24 17.29 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
          
        </>
    )
}
export default Footer;