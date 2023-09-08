import { ReactNode } from 'react'
import cn from 'classnames'

type TextProps = {
  title: string
  subTitle?: ReactNode
  className?: string
}

export const Text = ({ title, subTitle, className }: TextProps) => {
  return (
    <div className={cn('flex flex-col space-y-2.5', className)}>
      <div className="text-neutral-8 text-3xl font-semibold">{title}</div>

      {subTitle && <div className="text-base text-neutral-8 ">{subTitle}</div>}
    </div>
  )
}
