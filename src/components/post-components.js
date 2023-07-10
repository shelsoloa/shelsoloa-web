import React from 'react';
import { Link } from 'gatsby';

import './post-components.scss';

const PostPreview = props => (
  <Link className="post-preview" to={props.to}>
    <h3 class="post__title highlight">{props.title}</h3>
    <div class="post__inner">
      <p class="post__date">{props.date}</p>
      <p class="post__exceprt">{props.excerpt}</p>
    </div>
  </Link>
);

export { PostPreview };
