import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="flex">
        <article className="projects-cards game2">
          <h3>Scissors Rock Paper Lizard Spock</h3>
          <p className="project-description">
            A fun twist on the classic Rock-Paper-Scissors game, featuring
            Scissors-Rock-Paper-Lizard-Spock.
          </p>
          <h5>HTML, CSS, Javascript, React.js</h5>
        </article>
        <article className="projects-cards travels">
          <h3>MaVe Travels</h3>
          <p className="project-description">
            Interactive platform designed for travel enthusiasts to share their
            adventures, add their favorite journeys, connect with fellow
            globetrotters, and discover new destinations!
          </p>
          <h5>
            HTML, CSS, React.js, Bootstrap, Node.js, MongoDB, Express, Mongoose
          </h5>
        </article>
      </div>
      <div className="flex">
        <article className="projects-cards books">
          <h3>My Book Wishlist</h3>
          <p className="project-description">
            My Book Wishlist is a website for book enthusiasts to manage their
            reading preferences! Users can track whether they have already read
            a book, rate it, mark books they are currently reading, and add new
            books to their wishlist.
          </p>
          <h5>HTML, CSS, Javascript, React.js, Bootstrap</h5>
        </article>
        <article className="projects-cards game1">
          <h3>Bricks Breaker Game</h3>
          <p className="project-description">
            An engaging Bricks Breaker game where players shatter colorful
            bricks.
          </p>
          <h5>JavaScript, HTML, CSS</h5>
        </article>
      </div>
    </div>
  )
}

export default Projects
