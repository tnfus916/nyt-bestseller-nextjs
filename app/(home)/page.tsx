import Link from 'next/link';
import { API_URL } from '../constants';
import styles from './home.module.css';
import { MotionConfig, motion } from "framer-motion";

async function getBestSellerLists() {
    const res = await fetch(`${API_URL}/lists`);
    const data = await res.json();
    console.log(data.results);
    return data.results;
}

export default async function HomePage() {
    const data = await getBestSellerLists();

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>The New York Times Best Seller Explorer!</h1>
            <ul className={styles.listwrapper}>
                {data.map((list) => (
                    <div className={styles.listbox}>
                        <Link href={`/list/${list.list_name_encoded}`} key={list.list_name_encoded}>{list.list_name} &rarr;</Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}
