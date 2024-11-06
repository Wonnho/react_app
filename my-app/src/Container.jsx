import React from 'react'

export default function Container({children}) {
  return (
    <div
    style={{
      width:300,height:300,
    }}>{children}</div>
  )
}
//style을 통일시킬 때 이용