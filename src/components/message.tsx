import React from 'react'

let count = 0;
const message= ()=> {
    console.log('Message called', count)
    count++;
    return (
    <div>
      Message {count}
      {/*it will show 2,4,6 beacause of strict mode which
     is enabled then react render each components twice */}
    </div>
  )
}

export default message
