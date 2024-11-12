import React from 'react'

export default function Logging({isLogged}) {
  return (
   
    <div> {isLogged?'로그인 되어 있습니다.':'로그인이 필요합니다'}</div>
  )
}
