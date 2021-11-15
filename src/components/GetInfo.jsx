import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"

const GetInfo = ({history}) => {
 
    const [politics, setPolitics] = useState('')
    const [showPolitics, setShowPolitics] = useState('')
    const [hover, setHover] = useState('')
   
    function handleClick(){
        history.push(`/news-feed/${politics}`)
    }

    return(
        <div>
            <h1>Political views</h1>
            <p>Choose which best describes you</p>
            <br />
            <div className="info-main-content">
                <div className="form-group">
                <br />
                    <Form.Group>
                        <label
                            onMouseEnter={() => setHover('Liberal')}
                            onClick={() => {
                                setPolitics("conservative")
                                setShowPolitics("Liberal")
                            }}>
                            <Form.Check 
                                    type="radio"
                                    checked={politics === "conservative"}
                                    label="Conservative"
                                    readOnly
                                    >
                            </Form.Check>
                        </label>
                        <br />
                        <label
                            onMouseEnter={() => setHover('Conservative')}
                            onClick={() => {
                                setPolitics("liberal")
                                setShowPolitics("Conservative")
                            }}>
                            <Form.Check 
                                    type="radio"
                                    checked={politics === "liberal"}
                                    label="Liberal"
                                    readOnly
                                    >
                            </Form.Check>
                        </label>
                        <br />
                        <label
                            onMouseEnter={() => setHover('Moderate')}
                            onClick={() => {
                                setPolitics("moderate")
                                setShowPolitics("Moderate")
                            }}>
                            <Form.Check
                                    type="radio"
                                    checked={politics === "moderate"}
                                    label="Moderate"
                                    readOnly
                                    >
                            </Form.Check>
                        </label>
                    </Form.Group>
                </div>
                <div className="info-div">
                    <h2>Show me a
                        {politics ? ` ${showPolitics} feed` : hover ? ` ${hover} feed` : '...'} {/* need to change this so it shows OPPOSITE of conservative/liberal */}
                    </h2>
                </div>
            </div>
            <div className="info-button">
                {politics ? 
                <Button onClick={handleClick}>Continue to Feed</Button> 
                :
                <Button disabled>Choose a side</Button>}
            </div>
        </div>
    )
}
export default GetInfo
