import React from 'react';
import ReactQuill from 'react-quill';

export default React.forwardRef((props, ref) => {
  return <ReactQuill {...props} ref={ref} />;
});
