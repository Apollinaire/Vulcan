import React from 'react';
import {registerComponent} from 'meteor/vulcan:core';

function DocsLayout(props) {
  return (
    <div style={{maxWidth: 600, width: '100%', margin: 'auto'}}>
      {props.children}
    </div>
  );
}

registerComponent({name: 'DocsLayout', component: DocsLayout});
