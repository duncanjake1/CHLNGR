import React from "react"

import NewsContainer from './NewsContainer.jsx'

import { Button } from "react-bootstrap"

const newsFeed = ({history, match}) => {

    const politics = match.params.politics
    const VALID_POLITICS = ['conservative', 'liberal', 'moderate']

    // prevents users from typing a string that is not one of the valid political identities into the url
    if(!VALID_POLITICS.includes(politics)){ 
        history.push('/invalidPage')
    }

    function handleClick(){
        history.push(`/`)
    }

    return(
        <div>
            <Button onClick={() => handleClick()}>Log Out</Button> 
            <h1>News for a {politics}</h1>
            <br />
            <NewsContainer politics={politics}/>
        </div>
    )
}
export default newsFeed