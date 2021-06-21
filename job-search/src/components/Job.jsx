import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/index.css';
import { withRouter } from 'react-router-dom';
import { GiClick } from 'react-icons/gi';

class Job extends Component {
  state = {
    job: this.props.job,
  };

  render() {
    return (
      <Card className="job-card">
        <Card.Header as="h5">{this.state.job.title}</Card.Header>
        <Card.Body>
          <Card.Title className="company">
            {' '}
            {this.state.job.company_name}
          </Card.Title>
          <Card.Text>
            <span className="titles-style"> Category: </span>
            {this.state.job.category}
          </Card.Text>
          <Card.Text>
            <span className="titles-style"> Type of job: </span>
            {this.state.job.job_type}
          </Card.Text>
          <Card.Text>
            <span className="titles-style"> Publication date: </span>
            {this.state.job.publication_date}
          </Card.Text>
          <Card.Text>
            {' '}
            <span className="titles-style"> Location: </span>
            {this.state.job.candidate_required_location}
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() =>
              this.props.history.push(
                '/company-details/' + this.state.job.company_name
              )
            }
          >
            {' '}
            See more from "{this.state.job.company_name}" company here{' '}
            <GiClick className="details-button" />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(Job);
