import React from 'react';
import { Link } from 'react-router';

/**
 * MdxAnchor - replacement for the <a> component
 * Still need to fix stuff, mostly because the docs have different cases for links (sometimes links start with root,
 * sometimes not, they have an unpleasant .html because of hexo)
 */

function MdxAnchor({ href, children, ...props }) {
  if (href.slice(0, 4) !== 'http') {
    return (
      <Link to={'/docs/' + href.replace('.html', '').replace('/','')} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export default MdxAnchor;
