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
    message: '',
    loading: false
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    this.setState({ loading: true });
    dispatch(
      postLogin(values)
    ).then(() => this.setState({ loading: false }));
  };

  render() {
    const { message, loading } = this.state;
    return (
      <>
        {
          loading ? (
            <Loader />
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-4 mb-5">
                  <i className="fas fa-money-bill-wave fa-5x" style={{ paddingTop: 100 }} />
                  <h1 style={{ color: "#869197", paddingTop: 10 }}>&nbsp;Clip 'N Pay</h1>
                  <div className="wrapper-auth">
                    <div className="page">
                      {message ? (
                        <div className="alert alert-danger">
                          {message}
                        </div>
                      ) : null}
                      <LoginForm onSubmit={this.handleSubmit} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-6 offset-md-3">
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