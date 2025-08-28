import React from 'react';

function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:text-blue-800 underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
