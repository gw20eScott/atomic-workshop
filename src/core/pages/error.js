'use client'
import ClientApp from '@/core/app/clientApp'

// Example
import WelcomeComponent from '@/core/components/welcome'

export default function ErrorPage() {
  return (
    <ClientApp>
      <WelcomeComponent error />
    </ClientApp>
  )
}
