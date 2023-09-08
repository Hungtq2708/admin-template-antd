import { ReactNode } from 'react'

type WrapperComponentProps = {
  children: ReactNode
}

export const WrapperComponent = ({ children }: WrapperComponentProps) => {
  return (
    <div className="min-h-screen w-full grid grid-cols-2">
      <div className="bg-home-blue bg-cover bg-center bg-no-repeat"></div>

      <div className="flex justify-center items-center p-4">
        <div className="w-[528px] mx-auto">{children}</div>
      </div>
    </div>
  )
}
