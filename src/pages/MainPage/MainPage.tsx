import React from 'react'
import withAuth from '../../hocs/withAuth'

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>I'm Main Page...</h1>
    </div>
  )
}

export default withAuth(MainPage)
