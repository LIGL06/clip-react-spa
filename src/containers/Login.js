// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import LoginForm from '../components/LoginForm';
// Actions
import { postLogin } from '../actions/Session';
import Loader from "../components/Loader";

class Login extends Component {
  state = {
    loading: false
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    this.setState({ loading: true });
    dispatch(
      postLogin(values)
    ).then(() => this.setState({ loading: false })).catch(() => this.setState({ message: 'Nel pa' }));
    // this.props.postLogin(values)
    //   .then(() => this.setState({ loading: false }));
  };

  render() {
    const { message, loading } = this.state;
    return (
      <>
        {
          loading ? (
            <Loader />
          ) : (
            <div className="container text-center">
              <div className="row">
                <div className="col-md-5 mb-5 offset-md-3">
                  <i className="fas fa-money-bill-wave fa-5x" style={{ paddingTop: 100 }} />
                  <h1 style={{ color: "#869197", paddingTop: 10 }}>Clip 'N Pay</h1>
                  <LoginForm onSubmit={this.handleSubmit} />
                </div>
              </div>
              {
                message ? (
                  <>
                    {message}
                  </>
                ) : null
              }
              <div className="row">
                <div className="col-md-5 offset-md-3">
                  <small className="text-muted">
                    Made with <i className="far fa-heart" /> by: <br /> Iván García<br />
                    <a href="https://www.linkedin.com/in/luisgarcialuna/">
                      <i className="fab fa-linkedin fa-2x m-2" />
                    </a>
                    <a href="https://github.com/LIGL06">
                      <i className="fab fa-github fa-2x m-2" />
                    </a>
                  </small>
                </div>
              </div>
            </div>
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session
});

export default connect(mapStateToProps)(Login);