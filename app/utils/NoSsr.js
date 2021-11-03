/**
 * technically it is a react component,
 * yet, I think, it should be located in utils folder
 */
import React from 'react';
import dynamic from 'next/dynamic';

function NoSsr(props) {
  return <>{props.children}</>
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
});
