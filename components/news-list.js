import Link from "next/link"
export default function NewsList({news}){
    return (
        <ul className="news-list">
            {news.map((new_item) => (
                <li key={new_item.id}>
                    <Link href={`/news/${new_item.slug}`}>
                        <img src={`/images/news/${new_item.image}`} alt={new_item.title}></img>
                        <span>{new_item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}