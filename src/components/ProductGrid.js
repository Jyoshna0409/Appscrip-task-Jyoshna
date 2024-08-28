// components/ProductGrid.js
import styles from '../styles/ProductGrid.module.css';

export default function ProductGrid() {
    return (
        <div className={styles.container}>
            <div className={styles.filterSection}>
                {/* Add filter items here */}
            </div>
            <div className={styles.productGrid}>
                {/* Product Items */}
                <div className={styles.productCard}>
                    <div className={styles.productImage}>
                        <img src="/images/bag.png" alt="Product" />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productName}>PRODUCT NAME 1</p>
                    </div>
                    
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productImage}>
                        <img src="/images/1.png" alt="Product 1" />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productName}>PRODUCT NAME</p>
                    </div>
                    
                </div>
                {/* Repeat above block for more products */}
            </div>
        </div>
    );
}
