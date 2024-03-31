import styles from './book.module.css';

interface IBook {
    key: string;
    title: string;
    author: string;
    image: string;
    rank: number;
    description: string;
    buy: string;
    uri: string;
}
export default function BookCover({ key, title, author, image, rank, description, buy, uri }: IBook) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={title} width="50%" />
            <h2 className={styles.booktitle}>{title}</h2>
            <h3 className={styles.booksubtitle}>{author}</h3>
            <p className={styles.bookinfo}>{description}</p>
            <div className={styles.uriwrapper}>
                <a className={styles.uri} href={buy} target="_blank" rel="noreferrer">Buy now &rarr;</a>
                <a className={styles.uri} href={uri} target="_blank" rel="noreferrer">More info &rarr;</a>
            </div>
        </div>
    )
}
