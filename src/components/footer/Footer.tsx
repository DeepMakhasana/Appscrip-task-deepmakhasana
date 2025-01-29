import Image from "next/image";
import styles from "./footer.module.css";
import Accordion from "../accordion/Accordion";

const Footer = () => {
  return (
    <footer id={styles.footerContainer}>
      <div className="container">
        {/* first contact section */}
        <div className={styles.footer__contactSection}>
          <div className={styles.footer__contactSection__left}>
            <div>
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates from mettā muse.</p>
            </div>
            <div>
              <input type="text" placeholder="Enter your e-mail..." />
              <input type="submit" value={"SUBSCRIBE"} />
            </div>
          </div>
          <div className={styles.footer__contactSection__right}>
            <div>
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div>
              <h3>CURRENCY</h3>
              <div className={styles.footer__contactSection__right_currency}>
                <Image src={"/us.svg"} width={30} height={30} alt="us" />
                <span>USD</span>
              </div>
              <p>Transactions in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        {/* secound links section */}
        <div className={styles.footer__linkSection}>
          <div>
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <div>
              <h3>Follow Us</h3>
              <div className={styles.footer__linkSection__socialIcon}>
                <Image src={"/insta.svg"} width={30} height={30} alt="instagram" />
                <Image src={"/linkdin.svg"} width={30} height={30} alt="linkdin" />
              </div>
            </div>
            <div>
              <h3>mettā muse Accepts</h3>
              <Image src={"/pay.svg"} width={300} height={50} alt="pay" className={styles.payImage} />
            </div>
          </div>
        </div>

        <div className={styles.footer__linkSection__mobile}>
          <Accordion title="mettā muse" defualtValue={false}>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </Accordion>
          <Accordion title="Quick Links" defualtValue={false}>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Accordion>
          <Accordion title="FOLLOW US" defualtValue={false}>
            <div className={styles.footer__linkSection__socialIcon}>
              <Image src={"/insta.svg"} width={30} height={30} alt="instagram" />
              <Image src={"/linkdin.svg"} width={30} height={30} alt="linkdin" />
            </div>
          </Accordion>
          <div>
            <h3>mettā muse Accepts</h3>
            <Image src={"/pay.svg"} width={300} height={50} alt="pay" className={styles.payImage} />
          </div>
        </div>

        <div className={styles.footerBottomText}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
