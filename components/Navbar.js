/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <img src="../images/react-icon-small.png" />
                    <h1>ReactFact</h1>
                </div>
                
                <h2 className="nav-right">React Course - Project 1</h2>
            </nav>
        </div>
    )
    
    
}