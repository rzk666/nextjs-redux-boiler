import React from 'react';
// Utils
import Link from 'next/link';

const Clickable = (props) => {
  const {
    onClick,
    children,
    style,
    className,
    href,
    external,
    routing,
    ...moreProps
  } = props;
  let link;
  // If its a nevigational link
  if (external) {
    // If it links to an external address
    link = (
      <a href={href} style={{ textDecoration: 'none' }}>
        <span
          className={className}
        >
          {children}
        </span>
      </a>
    );
    // If it links to an internal address
  } else if (routing) {
    link = (
      <Link
        href={href}
        {...moreProps}
      >
        <span
          style={{ cursor: 'pointer' }}
          className={className}
        >
          {children}
        </span>
      </Link>
    );
    // If its just a clickable component of some sort
  } else {
    link = (
      <div
        onClick={(e) => onClick(e)}
        className={className}
        {...moreProps}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
    );
  }
  return link;
};

export default Clickable;
