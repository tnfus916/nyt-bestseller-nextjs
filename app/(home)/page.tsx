import Link from 'next/link';
import { Suspense } from 'react';


import { API_URL } from '../constants';
import styles from './home.module.css';
import Loader from '../../components/loader/loader';

async function getBestSellerLists() {
    const res = await fetch(`${API_URL}/lists`);
    const data = await res.json();

    data.results.sort((a, b) => a.list_name.localeCompare(b.list_name));
    return data.results;
}

export default async function HomePage() {
    const data = await getBestSellerLists();

    return (
        <div className={styles.container}>
            <Suspense fallback={<Loader />}>
                <ul className={styles.listwrapper}>
                    {data.map((list) => (
                        <div className={styles.listbox} key={list.list_name_encoded}>
                            <Link href={`/list/${list.list_name_encoded}`} key={list.list_name_encoded}>{list.list_name} &rarr;</Link>
                        </div>
                    ))}
                </ul>
            </Suspense>
        </div>
    )
}
