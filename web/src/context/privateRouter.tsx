'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
// import { cookies } from 'next/headers'

type PrivateTouterProps = {
  children: ReactNode
  isAuthenticated: boolean
}

const PrivateRouter = ({ children, isAuthenticated }: PrivateTouterProps) => {
  const { push } = useRouter()

  // const isAuthenticated = cookies().has('token')
  // const isAuthenticated = false

  useEffect(() => {
    if (!isAuthenticated) {
      push('/')
    }
  }, [isAuthenticated, push])
  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  )
}

export default PrivateRouter
