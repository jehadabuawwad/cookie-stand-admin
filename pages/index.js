import React from 'react'

import { useAuth } from '../contexts/auth'
import useResource from '../contexts/hooks/useResource'

import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'


export default function Home() {
  const { resources, loading, createResource, deleteResource } = useResource()
  const {user} = useAuth()
  return user ? (
    <CookieStandAdmin
      stands={resources}
      loading={loading}
      deleteResource={deleteResource}
      createResource={createResource}
    />
  ) : (
    <LoginForm />
  )
}
