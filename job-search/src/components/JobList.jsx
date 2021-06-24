import Job from './Job.jsx';
import { withRouter } from 'react-router-dom';

const JobList = ({ jobs, chooseOffer, jobSelected }) => (
  <div>
    {jobs.slice(0, 15).map((job) => (
      <Job
        key={job.id}
        job={job}
        chooseOffer={chooseOffer}
        jobSelected={jobSelected}
      />
    ))}
  </div>
);

export default withRouter(JobList);
