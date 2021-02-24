// probably don't need this component at all
// better and easier to just link to the outside source

import React from "react"

import { Button } from "react-bootstrap"


const Post = ({history, match}) => {

    function handleClick(){
        history.push(`/news-feed/${match.params.politics}`)
    }
    
    return(
        <div>
            <Button onClick={handleClick}>Back</Button>
            <p>I'm a dynamicaly rendered post with id = {match.params.id}</p>
        </div>
    )
}
export default Post