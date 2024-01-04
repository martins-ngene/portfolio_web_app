import { render } from '@testing-library/react'
import Hero from '@/components/sections/home'
 
it('renders homepage unchanged', () => {
  const { container } = render(<Hero />)
  expect(container).toMatchSnapshot()
})