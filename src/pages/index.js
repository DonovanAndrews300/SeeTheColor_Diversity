import React from 'react';

import Layout from '../components/layout';
import nelson from '../images/nelson.jpg';
import james from '../images/james.jpg';
import donovan from '../images/donovan.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>See The Color</h1>
          <p>
            Here to add diversty, inclusion, and fun to your camp!
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>
      <section id="one" className="wrapper style3 fade-up">
        <div className="inner">
        <h1>About</h1>
        <h3>Who we are:</h3>
        <p>See The Color Consulting LLC, is a diversity and inclusion consulting group specializing in strategic planning, training, public speaking, management, and recruitment. We serve youth development organizations in the US and abroad. STC helps organizations create diversity through community partnerships, targeted recruiting, and creative training. Our method is thorough and leaves your organization with sustainable practices to continue to diversify your staff and customer base.</p>

        <h3> Our Mission:</h3>
        <p>We  are committed to working with our clients to develop solutions for their diversity needs. We understand that creating programs that work for many different demographics is difficult. Our team wants to use our many years of experience in the camp and childcare industry to make your team more inclusive to all!</p>

        <ul>
A few benefits from improving organizational diversity:
          <li>1. Increased community involvement</li>
          <li>2. Increased customer base</li>
          <li>3. Unique experience for staff and customers</li>
        </ul>

        <p>We at STC believe that summer camp is a place where individuals from all walks of life should be able to learn how to be independant, work with others, and how to be their true selves.

We look forward to working with you and developing the foundation for diversity at your organization!</p>
          </div>
      </section>

      <section id="two" className="wrapper style2 spotlights">
        <section>
            <img src={nelson} alt=""  />
          <div className="content">
            <div className="inner">
              <h2>Nelson Strickland</h2>
              <p>
              Nelson Strickland is a camp director and youth development consultant from Woodbury, NJ. Nelson has been involved in summer camp and youth development for over 15 years as a camper, counselor, unit leader, and camp director. Nelson has been a camp director at Camp Tall Tree, Camp Dragonfly Forest, Camp Kesem at Rowan University, and L.G. Cook 4H Camp. He is currently the Camp Director for the YMCA Camp Birkett, a Michigan day camp program. 
              </p>
            </div>
          </div>
        </section>
        <section>
            <img src={james} alt=""  />
          <div className="content">
            <div className="inner">
              <h2>James Brooker</h2>
              <p>
              James Brooker has been a part of the camp community in different capacities for 8+ years. In his current job, he works with children in the child welfare system in Philadelphia.
               James is a Temple University alumni. His love for camp has a special place in his heart that can never be taken away. James' favorite thing about camp is knowing that no matter the location you can always create the magic.
              </p>
            </div>
          </div>
        </section>
        <section>
            <img src={donovan} alt="" />
          <div className="content">
            <div className="inner">
              <h2>Donovan Andrews</h2>
              <p>
              Donovan is an experienced camp professional who has worked in summer camp programs across the country. He has worked with children with multiple diagnoses (such as autism, sickle cell, and asthma) at camp, and has experience will all age ranges of campers. Donovan has also spent time tutoring middle school children in South Philadelphia. Donovan firmly believes in the power of curiosity and perseverance.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="three" className="wrapper style3 fade-up">
        <div className="inner">
          <h1>Service Overview</h1>
          <p>
          <p>Our team can help you recruit and hire diverse staff members. We use a three part approach.</p>
          <ul>
            <li><h3>1. Public Speaking:</h3>With our combined 35+ years in the camping industry, we've accumulated a wealth of knowledge regarding racial interaction in the camp world. We've taken our experiences and research and transformed this information into various presentations that are both accessible and engaging. Providing camp professionals with practical means of creating a more inclusive and welcoming camp environment for their lesser represented participants. With a wide range of topics including staff recruitment, camp culture, and year-round community engagement we will give you the tools needed to create a well rounded diverse program.</li>
            <br/>
            <li><h3>2. Trainings and Workshops:</h3> With our workshops, we bring our presentations to life. We come prepared with interactive programming that gives participants a scope into seeing camp from an often unfamiliar lens. Through our use of engaging role-playing scenarios, lessons, and professionals panels with first-hand experience of what it's like to be a minority at one of the happiest places on earth. Our workshops leave participants with the information and confidence needed to ask all of the right questions and make even better changes.</li>
            <br/>
            <li><h3>3. Consulting:</h3> Sometimes, even with all the right information, it's still hard to know what the right plan of action is needed to create the change we're looking for. We get that! Let us help guide you through those difficult decisions. With both virtual and in-person consultations, we'll provide tangible action steps that are personalized to your unique program to improve the quality of experience you provide for the multi-cultural members of your camp family.</li>
          </ul>
          <p>Most of our contracts take place over two years. We are patient and thorough and our work lasts for the lifetime of your organization.  Once we know more about your needs, we can customize a plan that makes the most sense for your organization.</p>
          </p>
          </div>
      </section>

      <section id="four" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
          If you have any questions or would like a consultation, you can reach us through the contact info below!
          </p>
          <div className="split style1">
          
            <section>
              <ul className="contact">
                <li>
                  <h3>Email</h3>
                  <a href="/#">seethecolorllc@gmail.com</a>
                </li>

               {/*<li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-youtube">
                        <span className="label">Youtube</span>
                      </a>
                    </li> 
                  </ul>
                </li>*/}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
