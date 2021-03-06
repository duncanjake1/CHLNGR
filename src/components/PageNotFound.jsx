import React from 'react'
import { Button } from 'react-bootstrap'

const PageNotFound = ({history}) => {

    function handleClick(){
        history.push('/')
    }

    return(
        <div>
            <h1>404</h1>
            <p>Didn't quite find what you're looking for</p>
            <Button onClick={handleClick}>Go Home</Button>
        </div>
    )
}
export default PageNotFound