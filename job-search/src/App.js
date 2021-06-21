import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MyNav from './components/Navbar';
import Home from './components/Home';
import CompanyDetails from './components/CompanyDetails';
import Job from './components/Job';

import './styles/index.css';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <MyNav />
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/job"
            exact
            render={(routerProps) => <Job {...routerProps} />}
          />
          <Route
            component={CompanyDetails}
            path="/company-details/:company"
            exact
          />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
