import { ReactNode } from 'react'

export type TMenuItem = {
  icon: ReactNode
  path: string
  label: string
  title?: string
  children?: TMenuItem[]
  accessWith: boolean
}

export type TMenuChild = Omit<TMenuItem, 'children'>

export type TMenuList = TMenuItem[]
