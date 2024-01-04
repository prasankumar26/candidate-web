import React from 'react'

const TopHeading = ({textstart}) => {
  return (
    <p className={`${textstart ? 'text-start ms-3' : 'text-center'} text-white`} style={{ fontSize: '18px', padding: '20px 0px', fontWeight: '600' }}>CATALYST</p>
  )
}

export default TopHeading