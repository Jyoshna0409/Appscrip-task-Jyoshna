import React from 'react';
import styles from '../styles/Description.module.css'; // Importing the CSS module

const description = () => {
    return (
        <section className={styles.description_headers}>
            <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
                Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </section>
    );
}

export default description;
