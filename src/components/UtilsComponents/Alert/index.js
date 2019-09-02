import React from 'react';

const Alert = ({ alert }) => {
  return (
    <div className={`test alert alert-${alert.type}`}>
      {alert.message}
      {alert.link && (
        <a href={alert.link.url} className="alert-link">
          {' ' + alert.link.label}
        </a>
      )}
    </div>
  );
};

export default Alert;
