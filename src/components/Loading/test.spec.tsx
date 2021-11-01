import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    render(<Loading />)
    const loading = screen.getByTestId('LoadingWrapper')

    expect(loading).toBeInTheDocument()
  })
})
