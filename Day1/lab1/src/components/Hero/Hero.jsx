import './Hero.css'

function Hero({name, bio , title , pic}) {
  return (
    <>
 <section id="about" className="hero-section">
      <div className="hero-container">
        <img
          src={pic}
          alt={name}
          className="hero-image"
        />
        <h1 className="hero-heading">
          Hi, I'm <span className="hero-highlight">{name}</span>
        </h1>
        <p className="hero-title">{title}</p>
        <p className="hero-bio">{bio}</p>
        <a href="#contact" className="hero-button">
          Get in Touch
        </a>
      </div>
    </section>
    
    </>
    
  )
}

export default Hero