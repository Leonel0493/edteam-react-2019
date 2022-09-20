import React from "react";

const withLogin = (WrappedComponent) => {
  return class WithLoginComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        logged: false,
      };
      this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin() {
      setTimeout(() => {
        const logged = Math.round(Math.random());
        this.setState({ logged: logged === 1 });
      }, 1000);
    }

    componentDidMount() {
      this.checkLogin();
    }

    render() {
      return <WrappedComponent {...this.props} logged={this.state.logged} />;
    }
  };
};

export default withLogin;
