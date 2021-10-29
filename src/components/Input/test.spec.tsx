import { render, screen } from '@/utils/tests/wrapper'

import Input from '.'

describe('<Input />', () => {
  it('should render the heading', () => {
    const { container } = render(<Input />)

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
