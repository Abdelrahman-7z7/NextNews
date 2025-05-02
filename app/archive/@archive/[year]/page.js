import * as React from 'react'
import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
    const {year} = React.use(params);
    const news = getNewsForYear(year);

    return (
        <NewsList news={news}></NewsList>
    )
}