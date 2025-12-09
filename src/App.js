import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
// import firebase from "./firebase";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  // React.useEffect(() => {
  //   const msg = firebase.messaging();
  //   console.log(msg, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222");
  //   msg
  //     .requestPermission()
  //     .then(() => {
  //       return msg.getToken();
  //     })
  //     .then((data) => {
  //       console.warn("token", data);
  //     });
  // });

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKID49RwX16z926Zg4BRSP-qeC-RJ6shBsnQ&s"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product" style={{ textDecoration: "none" }}>
                Product
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        {/* FOOTER */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <p className="mb-0">© 2025 ShopKart — All Rights Reserved.</p>
          <small>Made with ❤️ — Developed by Manish Maurya</small>
        </footer>
      </Router>
    </div>
  );
}

export default App;
