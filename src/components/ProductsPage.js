import React, { useState } from "react";
import styles from "../styles/ProductsPage.module.css";

const ProductsPage = () => {
    const [showFilters, setShowFilters] = useState([]);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    return (
        <div className={styles.container}>
            {/* Top Controls */}
            <div className={styles.topControls}>
                <span>3425 ITEMS</span>
                <span className={styles.filterToggle} onClick={toggleFilters}>
                    {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                </span>
                <span className={styles.sortBy}>
                    RECOMMENDED ▼
                </span>
            </div>

            <div className={styles.mainContent}>
                {/* Filter Sidebar */}
                {showFilters && (
                    <aside className={styles.sidebar}>
                        <div>
                            <input type="checkbox" id="customizable" />
                            <label htmlFor="customizable">CUSTOMIZABLE</label>
                        </div>
                        {/* Add more filter sections here */}
                        <div>
                            <h4>IDEAL FOR</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>OCCASION</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>WORK</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>FABRIC</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>SEGMENT</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>SUITABLE FOR</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>RAW MATERIAILS</h4>
                            <select>
                                <option>All</option>
                            </select>
                            <h4>PATTERN</h4>
                            <select>
                                <option>All</option>
                            </select>
                        </div>
                        {/* Continue with other filters similarly */}
                    </aside>
                )}

                {/* Product List */}
                <div className={styles.productGrid}>
                    {/* Example Product Card */}
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/1.png" alt="Product Name" />
                            <span className={styles.outOfStockBadge}>New Product</span>
                        </div>
                        <h4>PPXQC MILKYWAY DRESS IN...
                        <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/2.png" alt="Product Name" />
                        </div>
                        <h4>PPXQC MILKYWAY DRESS IN...
                        <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>

                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/4.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/5.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/6.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/7.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/8.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/9.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/10.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/11.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/12.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/13.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/14.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/15.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/16.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/17.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>

                    
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/6.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src="/images/bag.png" alt="Product Name" />
                            
                        </div>
                        <h4>PRODUCT NAME
                            <span className="{styles.heartIcon}"> ❤ </span>
                        </h4>
                        <p>Sign in or Create an account to see pricing</p>
                    </div>

                    {/* Add more product cards similarly */}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
