import React, { Component } from 'react';
// import style from 'img/style';
import {Link} from 'react-router-dom'
import Footer from "./Footer"



class Learn extends Component {
 
    
  render() {
    return (
      <div class="alert alert-primary">
      <div class="card-group" >
  <div class="card">
    <img src="./img/htmlCss.png" class="card-img-top" alt="..."/>
    <div class="card-body alert alert-primary">
      <h5 class="card-title">HTML and CSS</h5>
      <p class="card-text"> HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.</p>
      <a href="https://www.w3schools.com/html/html_css.asp" target="_blank"><button class="btn btn-outline-info">Learn HTML and CSS</button></a>
      
    
    </div>
  </div>
  <div class="card">
    <img src="./img/js.png" class="card-img-top " alt="..."/>
    <div class="card-body alert alert-primary">
      <h5 class="card-title ">JavaScript</h5>
      <p class="card-text ">A JavaScript library for building user interfaces built by Facebook. JavaScript is the Programming Language for the Web

JavaScript can update and change both HTML and CSS

JavaScript can calculate, manipulate and validate data)</p>
      <a href="https://www.w3schools.com/html/html_css.asp" target="_blank"><button class="btn btn-outline-info">Learn HTML and CSS</button></a>
    </div>
  </div>
  <div class="card">
    <img src="./img/node.png" class="card-img-top" alt="..." />
    <div class="card-body alert alert-primary">
      <h5 class="card-title">Node.js</h5>
      <p class="card-text">Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
      <a href="https://www.w3schools.com/js/default.asp" target="_blank"><button class="btn btn-outline-info">Learn JavaScript</button></a>
      
      </div>
    </div>
    <div class="card">
    <img src="./img/expressjs.jpg" class="card-img-top" alt="..." />
    <div class="card-body alert alert-primary">
      <h5 class="card-title">Express.js</h5>
      <p class="card-text">Express.js, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.[4]</p>
      <a href="https://expressjs.com/" target="_blank"><button class="btn btn-outline-info">Learn Express.js</button></a>
    </div>
  </div>
  <div class="card">
    <img src="./img/sequelize.png" class="card-img-top" alt="..." />
    <div class="card-body alert alert-primary">
      <h5 class="card-title">Sequelize</h5>
      <p class="card-text">Sequelize is a promise-based ORM for Node.js. Sequelize is easy to learn and has dozens of cool features like synchronization, association, validation, etc. It also has support for PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL. </p>
      <a href="https://hackernoon.com/getting-started-with-sequelize-for-nodejs-applications-2854c58ffb8c" target="_blank"><button class="btn btn-outline-info">Learn Seqelize</button></a>
    </div>
  </div>
  
</div>
</div>

    );
  }
}

export default Learn;