import '../styles/index.css';
import { Component } from 'react';
import { Container, Navbar, Row } from 'react-bootstrap';
import { FcBriefcase } from 'react-icons/fc';
import { Link } from 'react-router-dom';

class MyNav extends Component {
  state = {};

  render() {
    return (
      <Container className="nav-main">
        <Row>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">
              <Link to="/">
                <FcBriefcase className="job-logo" />{' '}
              </Link>
            </Navbar.Brand>
            <span className="nav-title">Welcome to the Job Search Engine</span>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default MyNav;
