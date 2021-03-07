import React from "react"
import { Button } from "react-bootstrap"

const Homepage = ({history}) => {

    function handleClick(){
        history.push("/info")
    }

    return(
        <div>
            <h1 className="title">CHLNGR</h1>
            <br />
            <h2>See what the other side is up to</h2>
            <br />
            <div className="button-wrapper">
                <Button onClick={handleClick}>Get Challenged</Button> 
                <Button>About</Button>
            </div>
        </div>
    )
}
export default Homepage