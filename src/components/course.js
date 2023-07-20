import React from "react";
import './course.css';
import { Link } from "react-router-dom";

function Course(){
    return(
<>
  <div className="menu-btn">
    <i className="fas fa-bars fa-2x" />
  </div>
  <div className="container">
    {/* Nav */}
    <nav className="main-nav">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.JBfdU3sdOBTXUIzz5hr18AHaF7&pid=Api&P=0hh&h=180"
        alt="LMS"
        className="logo"
      />
      <ul className="main-menu">
        <li>
          <a href="#">Course</a>
        </li>
        {/* <select>
              <option>Courses</option>
              <option>Medicine</option>
              <option>Engineering</option>
              <option>Arts</option>
              

            </select> */}
        {/* <li>
          <a href="#">Certification</a>
        </li> */}
        <li>
        <a><Link to="/abo">About</Link></a>
        </li>
        <li>
        <a><Link to="/vid">Video</Link></a>
        </li>
        <li>
          <a><Link to="/sta">Advisor</Link></a>
        </li>
        <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa fa-search">&#x1F50E;&#xFE0E;</i>
        </button>
      </div>
        {/* <li>
          <a href="#">Help</a>
        </li> */}
        <li>
          <a><Link to="/">Logout</Link></a>
        </li>
        {/* <li>
          <a href="#">Support</a>
        </li> */}
      </ul>
      <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart" />
          </a>
        </li>
      </ul>
    </nav>
    {/* Showcase */}
    {/* <header className="showcase">
      <h2>Best deals</h2>
      <p>A Broad selection of Courses</p>
      <Link to="/login" className="btn">
        Login <i className="fas fa-chevron-right" />
      </Link>
    </header> */}
    {/* Home cards 1 */}
    <section className="home-cards">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.TqepA3GdLnqY-LenzLP4jAHaEc&pid=Api&P=0&h=180" alt="" />
        <h3>Python for Data Analysis</h3>
        <p>
          Complete Data Science Training: Mathematics, Statistics, Python,Advanced Statistics
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
        <h3>Modern Artificial Intelligence</h3>
        <p>
          Harness the power of AI to solve practical and real world business problems.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.brjYKZ2j0YMWYv1DvTA7FAHaES&pid=Api&P=0&h=180" alt="" />
        <h3>Deep Learning</h3>
        <p>
          The most in-depth course on recommedation systems with Deep Learning.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse3.mm.bing.net/th?id=OIP.r9w95AXyCGlkP8geYmPyJwHaEK&pid=Api&P=0&h=180" alt="" />
        <h3>Fundamentals of Deep Learning</h3>
        <p>
          This course will start your career in Data Science
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Xbox */}
    
    {/* Home cards 2 */}
    <section className="home-cards">
      <div>
        <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
        <h3>The Secrets of Communicationn</h3>
        <p>Learn to remove bad social programming, build expert social skills, and create a natural state of sparkling confidence.</p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
        <h3>Communication Skills: Effective Business Communication</h3>
        <p>
        A Comprehensive Course on Business Communication and Communication Skills.Become more confident holding conversations about difficult topics.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
        <h3>The Complete Computer Basics Guide for Beginners: 2023</h3>
        <p>Computer Basics, Basic Computer Course, Windows 11 Basics, Microsoft Word, PowerPoint, Excel, Basic Computer Skills,2023</p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
        <h3>Explore Kubernetes</h3>
        <p>
          Learn how Kubernetes works and get started with cloud native app
          development today.Learn Kubernetes in simple, easy and fun way with hands-on coding exercises.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Carbon */}
    
    
  </div>
  {/* Links */}
  {/* <section className="links">
    <div className="links-inner">
      <ul>
        <li>
          <h3>IT & Software</h3>
        </li>
        <li>
        <a href="#">Network</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Hardware</a>
        </li>
        <li>
          <a href="#">OS and Servers</a>
        </li>
        <li>
          <a href="#">Data Science</a>
        </li>
        <li>
          <a href="#">Machine Learning</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Microsoft Store</h3>
        </li>
        <li>
          <a href="#">Account Profile</a>
        </li>
        <li>
          <a href="#">Download Center</a>
        </li>
        <li>
          <a href="#">Microsoft Store support</a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
        <li>
          <a href="#">Older tracking</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Education</h3>
        </li>
        <li>
          <a href="#">Microsfot in education</a>
        </li>
        <li>
          <a href="#">Office for students</a>
        </li>
        <li>
          <a href="#">Office 365 for schools</a>
        </li>
        <li>
          <a href="#">Deals for studentss</a>
        </li>
        <li>
          <a href="#">Microsfot Azure</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Enterprise</h3>
        </li>
        <li>
          <a href="#">Azure</a>
        </li>
        <li>
          <a href="#">AppSource</a>
        </li>
        <li>
          <a href="#">Automotive</a>
        </li>
        <li>
          <a href="#">Government</a>
        </li>
        <li>
          <a href="#">Healthcare</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Developer</h3>
        </li>
        <li>
          <a href="#">Visual Studio</a>
        </li>
        <li>
          <a href="#">Windowszs Dev Center</a>
        </li>
        <li>
          <a href="#">Developer Network</a>
        </li>
        <li>
          <a href="#">TechNet</a>
        </li>
        <li>
          <a href="#">Microsoft Developer</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Company</h3>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About Microsoft</a>
        </li>
        <li>
          <a href="#">Company news</a>
        </li>
        <li>
          <a href="#">Privacy at Microsoft</a>
        </li>
        <li>
          <a href="#">Inverstors</a>
        </li>
      </ul>
    </div>
  </section> */}
  {/* Footer
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <i className="fas fa-globe fa-2x" /> English (United States)
      </div>
      <ul>
        <li>
          <a href="#">Sitemap</a>
        </li>
        <li>
          <a href="#">Contact LMS</a>
        </li>
        <li>
          <a href="#">Privacy &amp; cookies</a>
        </li>
        <li>
          <a href="#">Terms of use</a> */}
        {/* </li>
        <li>
          <a href="#">Trademarks</a>
        </li>
        <li>
          <a href="#">Safety &amp; eco</a>
        </li>
        <li>
          <a href="#">About our ads</a>
        </li>
        <li>
          <a href="#">© LMS 2023</a>
        </li>
      </ul>
    </div>
  </footer> */}
</>
    );
}
export default Course;