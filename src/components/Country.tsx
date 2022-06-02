import { FunctionComponent } from 'react'
import { CountryType } from '../types'

interface ICountryProps {
  country: CountryType
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props

  return (
    <>
      <p>
        {country?.name?.common} -{' '}
        {country?.capital?.length > 0 ? country?.capital[0] : 'No info'} -{' '}
        {country?.population}
      </p>
    </>
  )
}
export default Country
