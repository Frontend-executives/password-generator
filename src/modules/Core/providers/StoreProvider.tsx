'use client'

import { createContext, ReactElement, ReactNode, useContext } from 'react'

import { Store } from '@/modules/Core/stores/Store'

const StoreContext = createContext<Store | null>(null)

export const useStore = (): Store => {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('You have forgotten to wrap your component with StoreProvider')
  }

  return context
}

interface Props {
  children: ReactNode
}

export const StoreProvider = ({ children }: Props): ReactElement => {
  return <StoreContext.Provider value={new Store()}>{children}</StoreContext.Provider>
}
