import React, { useState } from 'react'
import './roll.scss'
// import { FormGroup, Form, Button, Input, Col } from "reactstrap"
import { MDBContainer, MDBInputGroup, MDBCol, MDBRow, MDBInput, Button, } from "mdbreact";
import database from "../firebase/init";
import { ref, set, child, get } from "firebase/database";

function Roll() {
    const [name, setName] = useState("");
    const [random, setRandom] = useState(0)
    const [showLoader, setShowLoader] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name !== "") {
            let random = getRandomInt(1000000)
            setRandom(random)
            console.log(name, random)
            writeUserData(name, random)
            setShowLoader(true)
            closeLoaderIn5Seconds()
        } else {
            alert("Please enter a name")
        }
    }

    const closeLoaderIn5Seconds = () =>
        setTimeout(() => {
            setShowLoader(false)
        }, getRandomInt(1500));

    const showRollScreen = () => {
        return (
            <div className="roll-input-container">
                <MDBContainer>
                    <form onSubmit={handleSubmit}>
                        <MDBCol>
                            <MDBCol>
                                <h3>Enter Your Name</h3>
                            </MDBCol>
                            <MDBInputGroup
                                type="text"
                                hint="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                            </MDBInputGroup>
                        </MDBCol>
                        <MDBCol>
                            <Button type="submit" color="primary" className="btn btn-primary">
                                Roll
                            </Button>
                        </MDBCol>
                    </form>
                </MDBContainer>
                <h3 className="roll-input-label">
                    Your Number
                </h3>
                <div className="roll-result-container">
                    <div className="roll-result-content">{random}</div>
                </div>
            </div>
        )
    }
    const showLoadingScreen = () => {
        return (
            <div class="text-center">
                <div class="spinner-grow text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            {showLoader ? showLoadingScreen() : showRollScreen()}
        </div>
    )
}

export default Roll

function writeUserData(name, score) {
    set(ref(database, 'scores/' + score), {
        username: name,
        score: score,
    })
        .catch((err) => {
            console.log(err)
        })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
