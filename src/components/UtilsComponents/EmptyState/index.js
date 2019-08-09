import React from 'react';

import { Link } from 'react-router-dom';
import emptyStateImage from 'assets/img/emptyState.png';
import './emptyState.scss';

const EmptyState = ({ message, link = '', className = '' }) => (
  <>
    <div className={`text-center emptyState ${className}`}>
      <img alt="binoculars" className="mb-5" src={emptyStateImage} />
      <p className="text-muted">{message}</p>
      {link !== '' && (
        <Link key={link.url} className="btn btn-secondary mt-3" to={link.url}>
          {link.label}
        </Link>
      )}
    </div>
  </>
);

export default EmptyState;
