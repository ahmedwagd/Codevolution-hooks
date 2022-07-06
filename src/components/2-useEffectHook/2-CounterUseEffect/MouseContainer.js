import React, { useState } from 'react'
import MouseFunc from './MouseFunc';

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MouseFunc />}
    </div>
  )
}

export default MouseContainer