import { render } from '@testing-library/react'

import { Title } from '@/modules/Core/components/Title'

describe('Title', () => {
  it('should renders correctly', () => {
    const { getByText } = render(<Title />)

    const title = getByText('Password Generator')

    expect(title).toBeInTheDocument()
  })

  it('should be H1', () => {
    const { getByText } = render(<Title />)

    const title = getByText('Password Generator')

    expect(title.tagName).toBe('H1')
  })
})
