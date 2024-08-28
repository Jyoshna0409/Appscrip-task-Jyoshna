// pages/index.js
import Head from 'next/head';
import Header from '/src/components/Header';
import ProductGrid from '/src/components/ProductGrid';
import ProductsPage from '/src/components/ProductsPage';
import Footer from '/src/components/Footer';
import styles from '/src/styles/Home.module.css';
import Description from '/src/components/Description';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Page</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Font Awesome CDN --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header />
      <Description />
      <ProductsPage />
      <Footer />
    </div>
  );
}
