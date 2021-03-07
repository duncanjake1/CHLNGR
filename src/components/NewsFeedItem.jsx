import React from 'react'

const NewsFeedItem = (props) => {

    return(
        <div className="media" onClick={()=> window.open(props.url, "_blank")}>
            <div className="media-left">
                <img src={props.imageUrl} className="news-feed-image" />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.title}, {props.newsSource}</h4>
                <p>{props.content}</p>
                <br />
                <p>Click to read more!</p>
            </div>
        </div>
)
}

export default NewsFeedItem