import { resolve } from "path";
import BookCover from "../../../components/book/book";
import { API_URL } from "../../constants";
import styles from "./booklist.module.css";
import { Suspense } from "react";

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

    // find the list name from the list of lists
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
    console.log(data);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.container}>
                <h1 className={styles.title}>{data.list_name}</h1>
                <div className={styles.listwrapper}>
                    {data.books.map((book) => (
                        <BookCover
                            key={book.primary_isbn13}
                            title={book.title}
                            author={book.author}
                            image={book.book_image}
                            rank={book.rank}
                            description={book.description}
                            buy={book.amazon_product_url}
                            uri={book.book_uri}
                        />
                    ))}
                </div>
            </div>
        </Suspense>
    )
}
