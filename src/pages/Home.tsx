import React from 'react'
import Button from '../components/Button'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-gray-900 text-white h-screen flex w-full justify-center items-center gap-4">
      <h1 className="text-4xl">Portfolio Tech Stack is being updated...</h1>
      <Button text="Download Resume" />
    </div>
  )
}

export default Home