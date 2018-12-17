import * as React from 'react'
import { Link } from 'react-router'

export const App = (props: { children? }) => {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/login">Login </Link>
        {' '}
        <Link to="/student-list">Student List</Link>
      </header>
      <div style={{ marginTop: '1.5em' }}>{props.children}</div>
    </div>
  )
}
