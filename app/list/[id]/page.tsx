import { resolve } from "path";
import BookCover from "../../../components/book/book";
import { API_URL } from "../../constants";
import styles from "./booklist.module.css";

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

export default async function BookList({ params: { id } }: IParams) {
    const data = await getBookList(id);
    console.log(data);
    return (
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
    )
}
