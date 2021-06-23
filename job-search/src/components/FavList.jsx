import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HiCursorClick } from 'react-icons/hi';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';

const mapStateToProps = (state) => ({
  companies: state.list.companies,
});

class FavList extends Component {
  render() {
    return (
      <Row>
        <span className="headline-fav">List of your favourite companies:</span>
        <Col md={8}>
          <ListGroup>
            {console.log(this.props.companies)}
            {this.props.companies.map((company) => (
              <ListGroup.Item>
                <Button
                  className="fav-button-2"
                  onClick={() =>
                    this.props.history.push('/company-details/' + company)
                  }
                >
                  {' '}
                  <HiCursorClick />
                </Button>
                {company}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default connect(mapStateToProps)(withRouter(FavList));
