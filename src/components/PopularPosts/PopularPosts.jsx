import React, { useEffect, useState } from 'react';
import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const PopularPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPopularPosts().then(setPosts);
    }, []);

    return (
        <div className={styles.items}>
            {posts.map((post) => (
                <Link href={`/${post.slug}`} className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}> - {new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PopularPosts;
