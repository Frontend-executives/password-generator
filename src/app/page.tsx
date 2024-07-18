import { ReactElement } from 'react'

import { sum } from '@/modules/Core/utils/sum'

const Home = (): ReactElement => {
  return <main>{sum(10, 10)}</main>
}

export default Home
