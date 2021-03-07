// API key for newsapi.org => REDACTED

import React, { useEffect, useState }  from 'react'

import NewsFeedItem from './NewsFeedItem'

const NewsContainer = (props) =>{ //using props to determine type of politics

    const POLITICS = props.politics
    const SOURCES_FOR_CONSERVATIVE = ['biden', 'marijuana', 'blm']
    const SOURCES_FOR_LIBERAL = ['firearms', 'oil', 'maga']
    const SOURCES_FOR_MODERATE = SOURCES_FOR_CONSERVATIVE.concat(SOURCES_FOR_LIBERAL)
    
    const determineSearch = (() => {
        if (POLITICS === "conservative"){
            return SOURCES_FOR_CONSERVATIVE
        }
        else if (POLITICS === "liberal"){
            return SOURCES_FOR_LIBERAL
        }
        return SOURCES_FOR_MODERATE
    })();

    let searchItem = determineSearch[Math.floor(Math.random() * determineSearch.length)]
    console.log(searchItem) // Why is this logging three times? 

    const API_KEY = "ff2074c7a398415b8f9cb4fc91b80c5d"
    const API_URL = `https://newsapi.org/v2/everything?q=${searchItem}&apiKey=${API_KEY}`
    
    const PLACEHOLDER_CONTENT = 'Loading content. Please wait. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const [ news, setNews] = useState()
    const [ loaded, setLoading ] = useState(false)

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles)
                console.log(data.articles)
                setLoading(true)
            });
    }, []);
    
    
    return(
        <div className="news-main-content">
            {loaded ?
                <div className="news-container">
                    {news.map(article => 
                        <div>
                            <NewsFeedItem 
                            author={article.author}
                            title={article.title}
                            newsSource={article.source.name}
                            imageUrl={article.urlToImage}
                            url={article.url}
                            content={article.content ? article.content : article.description}
                            key={article}
                            />
                            <hr />
                        </div>
                    )}
                </div> 
                :
                <div className="news-container">
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/>
                    <hr />
                    <NewsFeedItem content={PLACEHOLDER_CONTENT}/> 
                </div>
            } 
        </div>
    )
}
export default NewsContainer