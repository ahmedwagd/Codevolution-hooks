import React from 'react'

function Button({ handlClick, children }) {
  console.log(`Rendering Button - `, children);
  return <button onClick={handlClick}>{children}</button>
}

export default React.memo(Button)