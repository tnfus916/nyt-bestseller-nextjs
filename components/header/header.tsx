import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <nav className={styles.container}>
            <div>
                <Link href="/">The New York Times Best Seller</Link>
            </div>
        </nav >
    )
}