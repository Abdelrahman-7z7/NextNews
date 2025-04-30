import Link from "next/link"

import { DUMMY_NEWS } from "@/dummy-news"

export default function NewsPage(){
    
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((new_item) => (
                    <li key={new_item.id}>
                        <Link href={`/news/${new_item.slug}`}>
                            <img src={`/images/news/${new_item.image}`} alt={new_item.title}></img>
                            <span>{new_item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}