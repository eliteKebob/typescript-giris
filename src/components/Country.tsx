import { FunctionComponent } from 'react'
import { CountryType } from '../types'

interface ICountryProps {
  country: CountryType
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props
  return <p>{country?.name?.common}</p>
}
export default Country
