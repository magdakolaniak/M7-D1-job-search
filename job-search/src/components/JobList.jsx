import Job from './Job.jsx';
import { withRouter } from 'react-router-dom';

const JobList = ({ jobs }) => (
  <div>
    {jobs.map((job) => (
      <Job key={job.id} job={job} />
    ))}
  </div>
);

export default withRouter(JobList);
