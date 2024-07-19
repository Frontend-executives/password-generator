import { cva, cx, VariantProps } from 'class-variance-authority'
import { createElement, ReactElement } from 'react'

const typographyClassName = cva('leading-normal font-normal antialiased', {
  variants: {
    type: {
      Heading_L: 'font-bold after-mobile:text-32px mobile:text-24px',
      Heading_M: 'font-bold after-mobile:text-24px mobile:text-16px',
      Body: 'font-bold after-mobile:text-18px mobile:text-16px',
    },
  },
})

type Props = {
  className?: string
  element?: 'h1' | 'p'
  text: string | number
  type: 'Heading_L' | 'Heading_M' | 'Body'
} & VariantProps<typeof typographyClassName>

export const Typography = ({ element = 'p', type, className, text }: Props): ReactElement => {
  return createElement(
    element,
    {
      className: cx(typographyClassName({ type }), className),
    },
    text,
  )
}
