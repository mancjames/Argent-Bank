import React from 'react'

type Props = {}

export default function Error({}: Props) {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>404<br />Page not found</h1>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </main>
  )
}