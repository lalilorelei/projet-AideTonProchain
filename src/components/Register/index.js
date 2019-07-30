import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';

class Register extends React.Component {

  state = {
    roleTitle: '',
    role: '',
  }

  componentDidMount = () => {
    console.log('state', this.props.location.state);
    const { roleTitle, role } =  this.props.location.state;
    //console.log(roleTitle, role);
    this.setState({roleTitle: roleTitle});
  }
  

  render() {
    //console.log(this.state);
    return(
      <Header title={`Inscription ${this.state.roleTitle}`} />
    );
  }
} 

export default withRouter(Register);