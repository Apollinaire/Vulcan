/**
 * @Author: Apollinaire Lecocq <apollinaire>
 * @Date:   08-02-19
 * @Last modified by:   apollinaire
 * @Last modified time: 08-02-19
 */
import React from 'react';
import { Components } from 'meteor/vulcan:core';
import propTypes from 'prop-types';

// this works, but it bloats the file tree
// example:
// import { V } from 'meteor/vulcan:core';
// <V c="Button" variant="raised" >
//   Click me!
// </V >
// -> in file tree:
//  <V c="Button" variant="raised" >
//    <Button variant="raised" >
//      Click me!
//    </Button >
//  </V>
class V extends React.Component {
  constructor(props) {
    super(props);
    this.R = Components[props.c];
    if (!this.R) {
      throw new Error(`Component ${props.c} is not registered. Make sure you imported the file`);
    }
  }
  render() {
    const { c, ...props } = this.props;
    return <this.R {...props} />;
  }
}

V.propTypes = {
  c: propTypes.string.isRequired,
};

// this simply does not work because there is nothing good in terms of jsx to render it without bloating the code itself
function Vbis(name) {
  if (!name) {
    throw new Error('A name is required');
  }
  const component = Components[name];
  if (!component) {
    throw new Error(`Component ${name} is not registered. Make sure you imported the file`);
  }
  return component;
}

export default V;
