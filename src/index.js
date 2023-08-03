import "./style.scss"
import background from './countryside.jpg'
import generateHome from "./home.js";
import generateNavBar from "./navbar.js"
import about from "./about.js"

/*
    With the navbar, the content should be 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>enchanté</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <div id="content">
            <div class="hero-bg about">
                <div class="hero-text">
                    <div class="head">
                        <a href="" class="logo">enchanté</a>
                        <nav class="navbar">
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    [Rest of code here]
                </div>
            </div>
        </div>
    </body>
    </html>
 */

generateNavBar();
generateHome();