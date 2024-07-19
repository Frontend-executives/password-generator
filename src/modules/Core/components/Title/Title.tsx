import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Typography } from '@/modules/Core/components/Typography'

const titleClassName = cx(
  // Блочная модель
  'after-mobile:mt-134px mobile:mt-16',
  // Оформление
  'text-center text-ui-grey-60',
)

export const Title = (): ReactElement => {
  return <Typography className={titleClassName} element='h1' text='Password Generator' type='Heading_M' />
}
