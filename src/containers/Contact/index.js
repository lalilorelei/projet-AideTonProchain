import { connect } from 'react-redux';

import Contact from '../../components/Contact';
import { submitContact } from '../../store/reducers/sharedReducer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitContact: data => {
    dispatch(submitContact(data));
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
