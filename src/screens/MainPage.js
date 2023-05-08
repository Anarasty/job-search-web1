import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-page-section">
      <nav>
        <Link className="logo" to="/">
          Galera
        </Link>
        <div className="reg-log-container">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <header>
        <img src="https://imgtr.ee/images/2023/05/05/aZ83R.png" alt="logo" />
        <h1>IT job searching website #1 in Ukraine</h1>
        <h3 className="typing-txt">
          <span className="type">
            <span> We will find the right job for you!</span>
          </span>
        </h3>
        <div>
          <Link to="/vacancies">See vacancy catalog &#x2192;</Link>
        </div>
      </header>
      <section className="small-about-section">
        <p>
          We are a team of IT professionals. Our goal is to help people find
          their dream job in the IT industry. We created this website to help
          job seekers and employers connect with each other and make it easy to
          find jobs and talent.
        </p>
        <h3>Our partners</h3>
        <ul>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/a6rL1.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/am2JX.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/amw6V.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/am1Fl.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/ambU3.png"
              alt="company"
            />
          </li>
        </ul>
      </section>
      <div className="horizontal-line-big"></div>
      <section className="website-features">
        <h2>Why you should choose us?</h2>
        <div className="features-container">
          <div>
            <h3>
              <i className="fa-solid fa-circle-check"></i> Only verified vacancies
            </h3>
            <p>
              Each job is vetted to ensure that it is real and suitable for
              applicants. This helps the user save time and make sure they are
              applying for a real job opportunity.
            </p>
          </div>
          <div>
            <h3>
              <i className="fa-solid fa-magnifying-glass"></i> Fast and simple
              search
            </h3>
            <p>
              Thanks to a simple and clear search interface, users can quickly
              find the necessary information about vacancies and decide on
              further actions.
            </p>
          </div>
          <div>
            <h3>
              <i className="fa-solid fa-list"></i> Personalized recommendations
            </h3>
            <p>
              Our algorithm analyzes a user's profile, qualifications, and
              preferences to offer only those jobs that best fit his needs.
            </p>
          </div>
        </div>
      </section>
      <div className="horizontal-line-big"></div>
      <section className="sliders-section">
        <div className="sliders">
          <h2>Our reviews</h2>
          <div className="sliders-items">
            <Carousel responsive={responsive}>
              <div className="slider-card">
                <img
                  draggable="false"
                  src="https://imgtr.ee/images/2023/05/06/aAORX.jpg"
                ></img>
                <h3>Dmitry Chumak</h3>
                <p>
                  Great resource for finding jobs in IT, found a job with
                  interesting tasks and a professional team.
                </p>
              </div>
              <div className="slider-card">
                <img
                  draggable="false"
                  src="https://imgtr.ee/images/2023/05/06/aAo4l.jpg"
                ></img>
                <h3>Lina Stepanenko</h3>
                <p>
                  Excellent selection of jobs on the site, easy search and
                  filters, found a job in my city.
                </p>
              </div>
              <div className="slider-card">
                <img
                  draggable="false"
                  src="https://imgtr.ee/images/2023/05/06/aAqX3.jpg"
                ></img>
                <h3>Oleg Torchin</h3>
                <p>
                  The site has a lot of interesting jobs in various areas of IT,
                  I found a job in a field I like.
                </p>
              </div>
              <div className="slider-card">
                <img
                  draggable="false"
                  src="https://imgtr.ee/images/2023/05/06/aAUvL.jpg"
                ></img>
                <h3>David Yarmolenko</h3>
                <p>
                  Great site for finding jobs in IT, immediately found
                  interesting jobs and sent a resume.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="subscribe-section">
        <h2>
          Purchase <span>Galera</span> +
        </h2>
        <div>
          <h3>By paying 4.99$ monthly u get:</h3>
          <ul>
            <li>Access to more jobs that are not available to general users</li>
            <li>
              Ability to see employers' contact information and contact them
              directly
            </li>
            <li>
              Personalized job recommendations that take into account the
              preferences and user experience
            </li>
            <li>Early access to new jobs that have just appeared </li>
            <li>
              The help of job recruiters who can help users find the perfect job
            </li>
          </ul>
          <Link to={"/"}>Subscribe</Link>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div>
            <h4>About Us</h4>
            <p>
              We are a job search platform focused on connecting talented IT
              professionals with leading companies in the industry.
            </p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: info@itjobs.com</p>
            <p>Phone: 555-1234</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>
              <i className="fab fa-facebook-square"></i> <a href="#">Facebook</a>
            </p>
            <p>
              <i className="fab fa-twitter-square"></i> <a href="#">Twitter</a>
            </p>
            <p>
              <i className="fab fa-linkedin"></i> <a href="#">LinkedIn</a>
            </p>
          </div>
        </div>

        <div>
          <p>&copy; 2023 Galera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
