import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation";
import * as React from 'react'

export default function NewsPageById ({params}) {
    const {slug} =  React.use(params); //params is asynchronized component, must be awaited OR React.use() is a better option for handling the params
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);

    if(!newsItem){
        notFound()
    }

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}