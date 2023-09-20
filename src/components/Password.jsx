import React from 'react'

const Password = ({children,...rest}) => {
  return (
    <span className='password btn' {...rest}>{children}</span>
  )
}

export default Password