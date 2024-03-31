"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
    const path = usePathname();
    console.log(path);
    return (
        <nav className={styles.container}>
            <div>
                <Link href="/">Home</Link>
                {path === "/" ? <motion.span layoutId="nav_btn"> 🗽</motion.span> : ''}
            </div>
            <div>
                <Link href="/about">About</Link>
                {path === "/about" ? <motion.span layoutId="nav_btn"> 🗽</motion.span> : ''}
            </div>
        </nav >
    )
}