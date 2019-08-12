import React from 'react';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50 mt-5">
          <div className="container text-center">
            <small>Copyright &copy; 2019 | Aider son prochain</small>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
