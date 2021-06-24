import { Component } from 'react';
import JobList from './JobList';
import '../styles/index.css';
import { GrWorkshop } from 'react-icons/gr';
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import FavIndicator from './FavIndicator';
import { getJobsAction } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => dispatch(getJobsAction()),
});

class Home extends Component {
  state = {
    query: '',
    jobSelected: null,
  };

  componentDidMount = async () => {
    this.props.getJobs();
  };
  chooseOffer = (job) => this.setState({ jobSelected: job });

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query.length > 4) {
      this.props.getJobs();
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
            <JobList
              jobSelected={this.state.jobSelected}
              jobs={this.props.allOffers.jobs}
              chooseOffer={this.chooseOffer}
            />
          </Col>
          <Col md={4}>{/* <JobDetails/> */}</Col>
        </Row>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
