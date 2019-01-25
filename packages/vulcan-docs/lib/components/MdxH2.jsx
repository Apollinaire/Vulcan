import React from 'react';

function MdxH2({children, ...props}){
  if(typeof children === 'string' && children.slice(0,7) === 'title: '){
    return <h1 {...props}>{children.slice(7)}</h1>
  }
  return <h2 {...props}>{children}</h2>
}

export default MdxH2;
