import Link from "next/link";
import * as React from 'react'
import NewsList from "@/components/news-list";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news";

//Catching-all fallbacks Routes:
//for handling the scenario of filtering the news based on the year and then the month we can use [[..filter]] which can allow as many as fragment that will be applied after the /archive/2024/3 "archive"

export default function FilteredNewsPage({params}){
    const {filter} = React.use(params)


    const selectedYear = filter?.[0] // ? => demonstrate if only filter[0] is defined || filter ? filter[0] : undefined
    const selectedMonth = filter?.[1]

    let news;
    let links = getAvailableNewsYears();

    if(selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>

    if(news && news.length > 0){
        newsContent = <NewsList news={news}></NewsList>
    }

    if(
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
    ){
        throw new Error('Invalid filter.')
    }


    return (

        <>
        
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )

}