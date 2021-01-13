// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";
// Components
import LoginForm from '../components/LoginForm';
// Actions
import { postLogin } from '../actions/Session';
import Loader from "../components/Loader";
import Error from "../components/Error";

class Login extends Component {
  state = {
    message: '',
    loading: false
  };

  componentDidMount() {
    const { session } = this.props;
    const { user } = session;
    if (user) return <Redirect to="/" />;
  }

  handleSubmit = async (values) => {
    const { postLogin, history } = this.props;
    this.setState({ loading: true });
    postLogin(values).then(() => {
      this.setState({ loading: false });
      history.push('/');
    }).catch(error => this.setState({ loading: false, message: error.message }));
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
              <Error message={message} />
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

export default connect(mapStateToProps, { postLogin })(Login);