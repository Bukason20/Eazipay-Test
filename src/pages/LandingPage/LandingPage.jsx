import React from 'react'
import styles from "./landingPage.module.css"
import { Logo, Apple, PlayStore, HeroImg, ProcessImg2, ProcessImg1, Connector1, Connector2, HappyMan, Dots, FooterLogo, Dots2 } from "../../assets"
import { NavLink } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineTwitter, } from "react-icons/ai"
import { FaLinkedin, FaFacebookF } from "react-icons/fa"
import { PiPaperPlaneTilt } from "react-icons/pi"

function LandingPage() {
  const steps = [
    { no: 1, title: "Create Your Free Account", body: "Click here to set up Your Eazipay Account." },
    { no: 2, title: "Add Employee Data", body: "Your Employee Information is 100% safe and secure." },
    { no: 3, title: "Prepare your Transaction", body: "Run payroll: Bulk Salaries and Compliance are done at once!" }
  ]
  return (
    <div className={styles.Cont}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <img src={Logo} alt="" />
          <ul className={styles.navlinks}>
            <li>Individual</li>
            <li>Business</li>
            <li>Pricing</li>
            <li>Set your Payroll</li>
          </ul>
          <div className={styles.navBtns}>
            <NavLink to="/dashboard">Log in</NavLink>
            <NavLink to="/dashboard">Register</NavLink>
          </div>
        </nav>
        <section id="heroSection" className={styles.heroCont}>
          <div className={styles.heroText}>
            <h1>Run your <span>Payroll</span> <span>easily</span> in <span>seconds</span></h1>
            <p>We've built an all inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
            <NavLink to="/dashboard">Start Using Free, Forever</NavLink>

            <div className={styles.downloadApp}>
              <p>Download the Eazipay App</p>
              <div className={styles.downloadBtns}>
                <div className={styles.store}>
                  <div className={styles.storeImg}>
                    <img src={Apple} alt="" />
                  </div>
                  <p>Download on the <br /><span>AppStore</span></p>
                </div>
                <div className={styles.store}>
                  <div className={styles.storeImg}>
                    <img src={PlayStore} alt="" />
                  </div>
                  <p>Get on<br /><span>Google Play</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroImg}>
            <img src={HeroImg} alt="" />
          </div>
        </section>
      </header>
      <main>
        <section id="business" className={styles.businessCont}>
          <h1>For Individuals and Businesses</h1>
          <p>Join 200+ businesses using Eazipay's easy solution.</p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h2>Tamper-proof Payroll for LIfe</h2>
              <p>Your staff payroll history is kept in one place forever.</p>
              <p>No more excel sheet or manual records.</p>
              <p>Download your payroll history anytime you need it.</p>
            </div>
            <div className={styles.feature}>
              <h2>All Payroll, Anytime Anywhere</h2>
              <p>Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
              <p>Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!</p>
            </div>
            <div className={styles.feature}>
              <h2>Payroll in Seconds</h2>
              <p>Never again wil you spend more than 2 minutes on payroll.</p>
              <p>Just click on your staff annd bulk-pay them at once.</p>
              <p>Payment is done permanently.</p>
            </div>
          </div>
          <p>We are happy to answer your queries. Please, reach us at <span id={styles.email}>hello@myeazipay.com</span> and expect our response shortly after.</p>

        </section>
        {/* ------------------------------------------PROCESS CONTAINER--------------------------------------- */}
        <section className={styles.processCont}>
          <h1>How Eazipay Works</h1>
          <p>Get started in 3 simple steps.</p>
          <div className={styles.processContents}>
            <div className={styles.processImg}>
              <img src={ProcessImg1} alt="" />
              <img src={ProcessImg2} alt="" />
            </div>
            <div className={styles.steps}>
              {steps.map((step, index) => (
                <div className={styles.step} key={index}>
                  <p>{step.no}</p>
                  <p>{step.title}</p>
                  <p>{step.body}</p>
                </div>
              ))}
              {/* <div className={styles.connectorLines}> */}
              <img src={Connector1} alt="" />
              <img src={Connector2} alt="" />
              {/* </div> */}
            </div>
          </div>

        </section>

        {/* ----------------------------------------------------PAYMENT SECTION------------------------------------------- */}
        <section className={styles.paymentCont}>
          <div className={styles.paymentContents}>
            <div className={styles.paymentText}>
              <h1>Free forever for your <span>salary payment</span></h1>
              <div className={styles.downloadApp}>
                <p>Subscribe to the Eazipay today</p>
                <div className={styles.downloadBtns}>
                  <div className={styles.store}>
                    <div className={styles.storeImg}>
                      <img src={Apple} alt="" />
                    </div>
                    <p>Download on the <br /><span>AppStore</span></p>
                  </div>
                  <div className={styles.store}>
                    <div className={styles.storeImg}>
                      <img src={PlayStore} alt="" />
                    </div>
                    <p>Get on<br /><span>Google Play</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paymentImg}>
              <img src={HappyMan} alt="" />
            </div>
          </div>
          <img src={Dots} alt="" />
        </section>

        {/* ------------------------------------------------SUBSCRIBE SECTION------------------------------------------------ */}
        <section className={styles.subscribeCont}>
          <div className={styles.subscribeContents}>
            <div className={styles.subscribeText}>
              <h1>Get an Exclusive Demo of Eazipay</h1>
              <p>Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
            </div>
            <form className={styles.subscribeForm}>
              <h2>First things first</h2>
              <p>We want to serve you better. Tell us a bit about yourself or company</p>
              <div className={styles.formBtns}>
                <button type='button' className={styles.active}>Individual</button>
                <button type='button'>Company</button>
              </div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Job Title" />
              <input type="text" placeholder="Company Size" />
              <button className={styles.submitBtn}>Request Demo</button>
            </form>
          </div>
          <img src={Dots2} alt="" />
        </section>
      </main>
      <footer className={styles.footerCont}>
        <div className={styles.footerContents}>
          <div className={styles.footerContent}>
            <img src={FooterLogo} alt="" />
            <p>Copyright © 2023 Eazipay.</p>
            <p>All rights reserved</p>
            <div className={styles.footerSocials}>
              <div className={styles.social}>
                <AiOutlineInstagram />
              </div>
              <div className={styles.social}>
                <AiOutlineTwitter />
              </div>
              <div className={styles.social}>
                <FaLinkedin />
              </div>
              <div className={styles.social}>
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <h3>Product</h3>
            <p>Individual</p>
            <p>Business</p>
            <p>Request Demo</p>
            <p>Pricing</p>
          </div>
          <div className={styles.footerContent}>
            <h3>Legacy</h3>
            <p>Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className={styles.footerContent}>
            <h3>Resources</h3>
            <p>FAQs</p>
            <p>Blog</p>
            <p>Career Demo</p>
            <p>Customer Stories</p>
          </div>
          <div className={styles.footerContent}>
            <h3>Contact us</h3>
            <p>eazipay@gmail.com</p>
            <p>+234 816 878 9518</p>
            <form className={styles.footerForm}>
              <input type="text" placeholder='Your email address ' />
              <div className={styles.sendIcon}>
                <PiPaperPlaneTilt />
              </div>

            </form>

          </div>
        </div>
      </footer>

    </div>
  )
}

export default LandingPage