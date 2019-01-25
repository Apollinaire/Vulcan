import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import { MDXProvider } from '@mdx-js/tag';
import MdxAnchor from './MdxAnchor';
import MdxH2 from './MdxH2';

function DocsLayout(props) {
  return (
    <div style={{ maxWidth: 600, width: '100%', margin: 'auto' }}>
      <MDXProvider components={{ a: MdxAnchor, h2: MdxH2, hr: () => null }}>
        {props.children}
      </MDXProvider>
    </div>
  );
}

registerComponent({ name: 'DocsLayout', component: DocsLayout });
