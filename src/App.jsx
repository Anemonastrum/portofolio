import { useEffect, useState } from "react";
import { Link, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faProjectDiagram,
  faEnvelope,
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as faGithubBrand,
  faLinkedin as faLinkedinBrand,
  faTwitter as faTwitterBrand,
  faInstagram as faInstagramBrand,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check the user's system preference on initial load
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-light dark:bg-dark transition-all duration-500">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-light-gray dark:bg-dark-gray z-50">
        <div className="text-3xl font-heading font-bold text-dark-blue dark:text-light-blue">
          anemona.cloud
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-dark-blue dark:hover:text-light-blue transition-colors"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-dark-blue dark:hover:text-light-blue transition-colors"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-dark-blue dark:hover:text-light-blue transition-colors"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-dark-blue dark:hover:text-light-blue transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-dark-blue dark:bg-light-blue rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faSun} />
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-dark-blue dark:text-light-blue hover:text-light-blue dark:hover:text-dark-blue transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-light-gray dark:bg-dark-gray absolute top-16 left-0 w-full shadow-lg`}
      >
        <div className="flex flex-col items-center py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg font-medium text-dark-blue dark:text-light-blue hover:text-light-blue dark:hover:text-dark-blue transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-lg font-medium text-dark-blue dark:text-light-blue hover:text-light-blue dark:hover:text-dark-blue transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg font-medium text-dark-blue dark:text-light-blue hover:text-light-blue dark:hover:text-dark-blue transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg font-medium text-dark-blue dark:text-light-blue hover:text-light-blue dark:hover:text-dark-blue transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 mt-4 bg-dark-blue dark:bg-light-blue rounded-full text-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faSun} />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col flex-grow">
        {/* Hero Section */}
        <Element
          name="home"
          className="mt-24 flex flex-col justify-center items-center text-center p-6 lg:p-12 flex-grow bg-light-gray dark:bg-dark-gray"
        >
          <img
            src="https://cdn.anemona.cloud/github/avatar.jpeg"
            alt="Profile"
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mb-6 object-cover duration-100 hover:scale-125 hover:shadow-2xl"
          />
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-dark-gray dark:text-light-gray leading-tight">
            Hi, I'm{" "}
            <span className="text-dark-blue dark:text-light-blue">Tyr</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Just Another Junior Web Developer with a passion for creating
            visually appealing and useful web experiences. I interested in both
            back-end and front-end programming, using my JavaScript skills to
            create dynamic and interactive user interfaces. Im interesed in
            technical stuff too, like Web Server Management, VPS, Resource
            Management, Load Balancing, Reverse Proxy, SSL and others!
          </p>
          <p className="text-xl lg:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            Main Skills:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              JavaScript
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Node.js
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              React.js
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Express.js
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Tailwind.css
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Linux
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              MongoDB
            </span>
          </div>
        </Element>

        {/* Projects Section */}
        <Element
          name="projects"
          className="flex flex-col justify-center items-center text-center p-6 lg:p-12 flex-grow bg-gray-100 dark:bg-gray-900"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-gray dark:text-light-gray">
            Projects
          </h2>
          <p className="text-lg lg:text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            Here are some of the projects I’ve worked on:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example Project Card */}
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn.anemona.cloud/github/desktopss1.png"
                alt="YAHD"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  Yet Another Homelab Dashboard (YAHD)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Server-sided Dashboard for Homelab to track all available
                  services built with NodeJS, and Simple stack of HTML, CSS, and
                  JS.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/YAHD"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                  <a
                    href="https://homelab.anemona.cloud/"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Live View
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn.anemona.cloud/github/usahamandiri.png"
                alt="Usahamandiri-frontend"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  Usahamandiri-frontend
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Front-end page for website usahamandirimagelang.com built with
                  Node.js, React.js with Bootstrap Stack.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/usahamandiri-frontend"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                  <a
                    href="https://usahamandirimagelang.com/"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Live View
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn.anemona.cloud/github/usahamandiri.png"
                alt="Usahamandiri-frontend"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  Usahamandiri-backend
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Back-end API for website usahamandirimagelang.com built with
                  Node.js, Express.js and MongoDB database.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/usahamandiri-backend"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                  <a
                    href="https://api.usahamandirimagelang.com/"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Live View
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/Anemonastrum/WeeBUNTU/main/docs/Screenshots/panel.png"
                alt="Usahamandiri-frontend"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  WeeBuntu Linux Distro
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  WeeBUNTU is a distro based on Ubuntu with extra flavour for
                  weebs.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/WeeBUNTU"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn.anemona.cloud/hydro.svg"
                alt="Usahamandiri-frontend"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  Dunia Apps
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  News Hybrid apps built with ionic angular framework with api
                  form NewsApi.org.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/Dunia-News-App"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://cdn.anemona.cloud/hydro.svg"
                alt="Usahamandiri-frontend"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-gray dark:text-light-gray mb-4">
                  Playent
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Web based app to manage playstation rental, built with PHP
                  Laravel 11.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Anemonastrum/Playent"
                    className="text-dark-blue dark:text-light-blue font-semibold hover:underline"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </Element>

        {/* My Other Hosted Services Section */}
        <Element
          name="other-services"
          className="flex flex-col justify-center items-center text-center p-6 lg:p-12 flex-grow bg-light-gray dark:bg-dark-gray"
        >
          <p className="text-lg lg:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Im interested in home server too! This is some of the services of my
            home server that i opened to pulbic.
          </p>
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-dark-blue dark:bg-light-blue text-white text-center font-medium">
                  Service Name
                </th>
                <th className="px-6 py-3 bg-dark-blue dark:bg-light-blue text-white text-center font-medium">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-300 text-center">
                  Web file server
                </td>
                <td className="px-6 py-4 text-dark-blue dark:text-light-blue text-center">
                  <a
                    href="https://files.anemona.cloud/"
                    className="hover:underline"
                  >
                    https://files.anemona.cloud/
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-300 text-center">
                  CDN file host
                </td>
                <td className="px-6 py-4 text-dark-blue dark:text-light-blue text-center">
                  <a
                    href="https://cdn.anemona.cloud/"
                    className="hover:underline"
                  >
                    https://cdn.anemona.cloud/
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-300 text-center">
                  Home assistant
                </td>
                <td className="px-6 py-4 text-dark-blue dark:text-light-blue text-center">
                  <a
                    href="https://assistant.anemona.cloud/"
                    className="hover:underline"
                  >
                    https://assistant.anemona.cloud/
                  </a>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </Element>

        {/* Skills Section */}
        <Element
          name="skills"
          className="flex flex-col justify-center items-center text-center p-6 lg:p-12 flex-grow bg-white dark:bg-gray-800 transition-colors duration-500"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-gray dark:text-light-gray">
            All Other Skills
          </h2>
          <p className="text-lg lg:text-xl font-medium mb-8 text-gray-600 dark:text-gray-400">
            I have experience in the following technologies too:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              HTML
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              CSS
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Bootstrap CSS
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              PHP
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Codeigniter
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Laravel
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              MariaDB
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              BASH/SHELL
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Docker
            </span>
            <span className="px-6 py-3 bg-dark-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Nginx
            </span>
            <span className="px-6 py-3 bg-light-blue text-white rounded-full font-heading text-lg shadow-lg duration-100 hover:scale-105 hover:shadow-2xl">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              GIT
            </span>
          </div>
        </Element>

        <Element
          name="contact"
          className="flex flex-col justify-center items-center text-center p-6 lg:p-12 flex-grow bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-gray dark:text-light-gray">
            Contact
          </h2>
          <p className="text-lg lg:text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            Get in touch with me:
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Anemonastrum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-blue dark:text-light-blue text-3xl hover:text-light-blue dark:hover:text-dark-blue transition-colors"
            >
              <FontAwesomeIcon icon={faGithubBrand} />
            </a>
            <a
              href="www.linkedin.com/in/damastirta-ermaya-9353a0279"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-blue dark:text-light-blue text-3xl hover:text-light-blue dark:hover:text-dark-blue transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinBrand} />
            </a>
            <a
              href="https://www.instagram.com/dtirta.e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-blue dark:text-light-blue text-3xl hover:text-light-blue dark:hover:text-dark-blue transition-colors"
            >
              <FontAwesomeIcon icon={faInstagramBrand} />
            </a>
          </div>
          <p className="text-md lg:text-lg font-medium mt-8 text-gray-700 dark:text-gray-300">
            @Anemonastrum
          </p>
        </Element>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-light-gray dark:bg-dark-gray text-center text-dark-blue dark:text-light-blue">
        <p>
          &copy; {new Date().getFullYear()} @Anemonastrum. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
