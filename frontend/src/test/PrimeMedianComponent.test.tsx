import { expect } from 'chai'
import { describe, it } from 'mocha'
import { render, fireEvent } from '@testing-library/react'
import PrimeMedianComponent from '../components/PrimeMedianComponent'

describe('PrimeMedianComponent', () => {
    it('displays median correctly after fetching', async () => {
        const { getByLabelText, getByText, findByText } = render(<PrimeMedianComponent />)
        const input = getByLabelText('Enter a number:') as HTMLInputElement
        const findButton = getByText('Find Median')

        fireEvent.change(input, { target: { value: '10' } })
        fireEvent.click(findButton)

        const medianText = await findByText('Medians: 3, 5')
        expect(medianText).to.exist
    })
    it('displays error message correctly after fetching', async () => {

        const { getByLabelText, getByText, findByText } = render(<PrimeMedianComponent />)
        const input = getByLabelText('Enter a number:') as HTMLInputElement
        const findButton = getByText('Find Median')

        fireEvent.change(input, { target: { value: '-5' } })
        fireEvent.click(findButton)

        const errorText = await findByText('Invalid input. Please Enter a positive number')
        expect(errorText).to.exist
    })
})
