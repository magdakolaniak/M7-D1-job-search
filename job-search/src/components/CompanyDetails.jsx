import { Component } from 'react';
import '../styles/index.css';
import { Card } from 'react-bootstrap';

class CompanyDetails extends Component {
  state = {
    companyJobs: [],
  };

  componentDidMount = async () => {
    let companyName = this.props.match.params.company;
    try {
      const response = await fetch(
        'https://remotive.io/api/remote-jobs?company_name=' + companyName
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          companyJobs: data.jobs,
        });
      } else {
        console.log('failed while fetching');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.companyJobs.map((job) => (
          <Card className="job-card">
            <Card.Header as="h5">{job.title}</Card.Header>
            <Card.Body>
              <Card.Title className="company"> {job.company_name}</Card.Title>
              <Card.Text>
                <span className="titles-style"> Category: </span>
                {job.category}
              </Card.Text>
              <Card.Text>
                <span className="titles-style"> Type of job: </span>
                {job.job_type}
              </Card.Text>
              <Card.Text>
                <span className="titles-style"> Publication date: </span>
                {job.publication_date}
              </Card.Text>
              <Card.Text>
                {' '}
                <span className="titles-style"> Location: </span>
                {job.candidate_required_location}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
export default CompanyDetails;
