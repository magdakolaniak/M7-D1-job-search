import { Component } from 'react';
import JobList from './JobList';
import '../styles/index.css';
import { GrWorkshop } from 'react-icons/gr';

import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import FavIndicator from './FavIndicator';

class Home extends Component {
  state = {
    allJobs: [],
    query: '',
    jobSelected: null,
  };
  fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://remotive.io/api/remote-jobs?search=${this.state.query}`
      );
      if (response.ok) {
        let data = await response.json();

        this.setState({ allJobs: data.jobs });
      } else {
        console.log('error while fetching');
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchJobs();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query.length > 4) {
      this.fetchJobs();
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col md={8}>
            <InputGroup size="lg" className="search-desc">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Start looking for a new Job!{' '}
                <GrWorkshop className="search-bar-icon" />
              </InputGroup.Text>
              <FormControl
                onChange={(e) => this.setState({ query: e.target.value })}
                aria-label="Large"
                placeholder="Which position are you looking for?"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>{' '}
          </Col>
          <Col md={4}>
            <FavIndicator />
          </Col>
        </Row>
        <Row>
          <span className="results-from-query">
            Showing results for: {this.state.query}
          </span>
        </Row>
        <Row>
          <Col md={8}>
            <JobList jobs={this.state.allJobs} />
          </Col>
          <Col md={4}>{/* <JobDetails/> */}</Col>
        </Row>
      </>
    );
  }
}
export default Home;
