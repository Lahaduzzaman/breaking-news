import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=80c696efd72d484ea401955fb2afc8f2';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;