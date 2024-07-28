import { Suspense } from "react";

import BookCover from "../../../components/book/book";
import { API_URL } from "../../constants";
import styles from "./booklist.module.css";
import Loader from "../../../components/loader/loader";
import Link from "next/link";

interface IParams {
    params: {
        id: string;
    }
}

async function getBookList(id: string) {
    const res = await fetch(`${API_URL}/list?name=${id}`);
    const data = await res.json();
    return data.results;
}
async function getBookListName(id: string) {
    const res = await fetch(`${API_URL}/lists`);
    const data = await res.json();

    const list = data.results.find((list) => list.list_name_encoded === id);
    return list.list_name;
}

export async function generateMetadata({ params: { id } }: IParams) {
    const title = await getBookListName(id);
    return {
        title: title,
    };
}


export default async function BookList({ params: { id } }: IParams) {
    const data = await getBookList(id);

    console.log("yoyo", data.books);
    return (
        <Suspense fallback={<Loader />}>
            <div className={styles.container}>
                <div className={styles.pagetitle}>
                    <h1 className={styles.title}>{data.list_name}</h1>
                </div>
                <div className={styles.listwrapper}>
                    {data.books.map((book) => (
                        <BookCover
                            key={book.primary_isbn13}
                            title={book.title}
                            author={book.author}
                            image={book.book_image}
                            rank={book.rank}
                            buy={book.amazon_product_url}
                            uri={book.book_uri}
                        />
                    ))}
                </div>
            </div>
        </Suspense>
    )
}
