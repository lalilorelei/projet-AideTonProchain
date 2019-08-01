import { connect } from 'react-redux';

import Contact from '../../components/Contact';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitContact: data => {},
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
