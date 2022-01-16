import React, { Component } from 'react'
import './main.scss'
import Header from "./header"
import Footer from "./footer"
import Roll from "./roll"
import Board from "./board"

export default class Main extends Component {

    render() {
        return(
            <div>
                <div className="header-container">
                    <Header />
                </div>
                <div className="body-container">
                    <Roll />
                </div>
                <div className="body-board-container">
                    <Board />
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}