import "./Home.css"

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="animation2">
        <svg width="18%" height="10">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="1%" stopColor="#6A5495" />
              <stop offset="100%" stopColor="#ED5EDD" />
            </linearGradient>
          </defs>
          <rect x="10" y="0" width="100%" height="10" fill="url(#grad1)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="12%" height="10">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="1%" stopColor="#F3CA52" />
              <stop offset="100%" stopColor="#7ABA78" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad2)" />
        </svg>
      </div>

      <div className="animation">
        <svg width="22%" height="10">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="1%" stopColor="#FAA300" />
              <stop offset="100%" stopColor="#F4538A" />
            </linearGradient>
          </defs>
          <rect x="10" y="0" width="100%" height="10" fill="url(#grad3)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="20%" height="10">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="1%" stopColor="#8BE8E5" />
              <stop offset="100%" stopColor="#A084E8" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad4)" />
        </svg>
      </div>

      <div className="animation2">
        <svg width="12%" height="10">
          <rect x="10" y="0" width="100%" height="10" fill="url(#grad2)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="18%" height="10">
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad1)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="20%" height="10">
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad3)" />
        </svg>
      </div>

      <div className="animation3">
        <svg width="20%" height="10">
          <rect x="10" y="0" width="100%" height="10" fill="url(#grad4)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="22%" height="10">
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad2)" />
        </svg>
        <svg width="2%" height="10">
          <circle cx="50%" cy="50%" r="1" fill="white" />
        </svg>
        <svg width="18%" height="10">
          <rect x="0" y="0" width="100%" height="10" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="animation">
        <h1>Veronica Vezzoli</h1>
        <h2>Web Developer</h2>
      </div>

      <div className="animation2">
        <svg width="270" height="20">
          <rect x="10" y="10" width="250" height="10" fill="url(#grad3)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="215" height="20">
          <rect x="5" y="10" width="200" height="10" fill="url(#grad1)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="160" height="20">
          <rect x="5" y="10" width="150" height="10" fill="url(#grad2)" />
        </svg>
      </div>

      <div className="animation">
        <svg width="170" height="20">
          <rect x="10" y="10" width="150" height="10" fill="url(#grad4)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="190" height="20">
          <rect x="10" y="10" width="180" height="10" fill="url(#grad3)" />
        </svg>
      </div>
      <div className="animation2">
        <svg width="120" height="20">
          <rect x="10" y="10" width="100" height="10" fill="url(#grad1)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="220" height="20">
          <rect x="10" y="10" width="200" height="10" fill="url(#grad2)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="220" height="20">
          <rect x="10" y="10" width="200" height="10" fill="url(#grad4)" />
        </svg>
      </div>

      <div className="animation3">
        <svg width="270" height="20">
          <rect x="10" y="10" width="250" height="10" fill="url(#grad2)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="200" height="20">
          <rect x="10" y="10" width="180" height="10" fill="url(#grad1)" />
        </svg>
        <svg width="7.5" height="7.5">
          <circle cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg width="210" height="20">
          <rect x="10" y="10" width="220" height="10" fill="url(#grad3)" />
        </svg>
      </div>
    </div>
  )
}

export default Home
