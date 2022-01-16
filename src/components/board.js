import React, { useState, useEffect } from 'react'
import './board.scss'
import database from "../firebase/init";
import { MDBCol, MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { ref, onValue, get, query, limitToLast } from "firebase/database";
import { Transition, TransitionGroup } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};


const dbRef = ref(database, 'scores')
const Board = () => {
    const [board, setBoard] = useState({});
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        onValue(query(dbRef, limitToLast(10)), (snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val())
                setInProp(true)
                setBoard(snapshot.val())
            } else {
                console.log("No data available");
            }
        });
    }, [])


    return (
        <div>
            <MDBContainer size="md" className="container-md">
                <Transition in={inProp} timeout={duration}
                    addEndListener={(node, done) => {
                        // use the css transitionend event to mark the finish of a transition
                        node.addEventListener('transitionend', done, false);
                    }}
                >
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <MDBTable className="table">
                                <MDBTableHead color="primary-color" textWhite>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Scores</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {Object.entries(board)
                                        .sort((a, b) => a[1].score > a[1].score ? 1 : -1)
                                        .map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index}</th>
                                                    <td>{item[1].username}</td>
                                                    <td>{item[1].score}</td>
                                                </tr>
                                            )
                                        })}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    )}
                </Transition>
            </MDBContainer>
        </div>
    )
}

export default Board