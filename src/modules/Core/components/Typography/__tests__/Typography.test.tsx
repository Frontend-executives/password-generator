import { render } from '@testing-library/react'

import { Typography } from '@/modules/Core/components/Typography'

describe('Typography', () => {
  it('should renders correct element', () => {
    const { getByText } = render(<Typography element='h1' text='Typography' type='Heading_L' />)

    const typography = getByText('Typography')

    expect(typography.tagName).toBe('H1')
  })

  it('should renders passed text', () => {
    const { getByText } = render(<Typography text='Typography' type='Heading_L' />)

    const typography = getByText('Typography')

    expect(typography).toBeInTheDocument()
  })

  it('should renders passed class name', () => {
    const { getByText } = render(<Typography className='text-red-500' text='Typography' type='Heading_L' />)

    const typography = getByText('Typography')

    expect(typography.classList.contains('text-red-500')).toBe(true)
  })
})
