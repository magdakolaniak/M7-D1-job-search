import { Component } from 'react';
import { GiSecretBook } from 'react-icons/gi';
import { Button } from 'react-bootstrap';
import '../styles/index.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return state;
};

class FavIndicator extends Component {
  render() {
    return (
      <>
        <span className="fav-indicator">
          <Button
            className="fav-button"
            onClick={() => this.props.history.push('/favourite')}
          >
            Your favourite
            <GiSecretBook className="fav-icon" />
            <span>{this.props.list.companies.length}</span>
          </Button>
        </span>
      </>
    );
  }
}

export default connect(mapStateToProps)(withRouter(FavIndicator));
