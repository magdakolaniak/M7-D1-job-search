import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HiCursorClick } from 'react-icons/hi';
import { CgTrash } from 'react-icons/cg';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';
import { removeFromListAction } from '../actions';

const mapStateToProps = (state) => ({
  companies: state.list.companies,
});
const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeFromListAction(index));
  },
});

class FavList extends Component {
  render() {
    return (
      <Row>
        <span className="headline-fav">List of your favourite companies:</span>
        <Col md={6}>
          <ListGroup>
            {console.log(this.props.companies)}
            {this.props.companies.map((company, index) => (
              <>
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
                <div className="trash-icon-div">
                  <Button
                    className="trash-icon"
                    onClick={() => this.props.removeFromList(index)}
                  >
                    <CgTrash />
                  </Button>
                </div>
              </>
            ))}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavList));
