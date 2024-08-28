import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.subscribe}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h4>CURRENCY</h4>
                    <p>
                        <Image src="/images/usd1.png" alt="USD" width={30} height={25} /> USD
                    </p>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>

            <div className={styles.footerLinks}>
                <div className={styles.footerSection}>
                    <h4>mettā muse</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">Artisans</a></li>
                        <li><a href="#">Boutiques</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">EU Compliances Docs</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#">Orders & Shipping</a></li>
                        <li><a href="#">Join/Login as a Seller</a></li>
                        <li><a href="#">Payment & Pricing</a></li>
                        <li><a href="#">Return & Refunds</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>FOLLOW US</h4>
                    <div className={styles.socialIcons}>
                        <a href="#"><Image src="/images/insta1.png" alt="Instagram" width={24} height={24} /></a>
                        <a href="#"><Image src="/images/Linked.png" alt="LinkedIn" width={24} height={24} /></a>
                    </div>
                    <h4>mettā muse ACCEPTS</h4>
                    <div className={styles.paymentIcons}>
                        <Image src="/images/Master.png" alt="Mastercard" width={40} height={24} />
                        <Image src="/images/Paypal.png" alt="PayPal" width={40} height={24} />
                        <Image src="/images/Amex.png" alt="Amex" width={40} height={24} />
                        <Image src="/images/ApplePay.png" alt="Apple Pay" width={40} height={24} />
                        <Image src="/images/Gpay.png" alt="Google Pay" width={40} height={24} />
                    </div>
                </div>
            </div>

            <p className={styles.copyright}>&copy; 2023 mettamuse. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
