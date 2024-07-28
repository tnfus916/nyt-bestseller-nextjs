import { Metadata } from "next"
import styles from './not-found.module.css';

export const metadata: Metadata = {
    title: 'Not Found'
}

export default function NotFound() {
    return (
        <div className={styles.container}> page not found
        </div >
    )
}
