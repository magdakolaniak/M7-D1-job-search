import {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

class JobDetails extends Component {

state= {
    job: []
}
render () {
    return (
        <div>
{this.state.job ? (
    <>
<Row>
    <Col sm={12}>
        <h1> {this.state.job.title}</h1>
    </Col>
</Row>

    </>
): (
    <Row>
        <Col sm={12}>
            <h3>Select a job to see details</h3>
        </Col>
    </Row>
)}


        </div>
    );
}

}
export default JobDetails;