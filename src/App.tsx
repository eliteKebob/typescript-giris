// import axios from 'axios'
import { useEffect } from 'react'
import Country from './components/Country'
import Loading from './components/Loading'
// import { CountryType } from './types'
import { useAppDispatch, useAppSelector } from './store'
import { fetchCountries } from './features/countrySlice'

const App = () => {
  // const [countries, setCountries] = useState<CountryType[]>([])
  // const [loading, setLoading] = useState<boolean>(false)
  const countries = useAppSelector((state) => state.countries)

  const dispatch = useAppDispatch()

  // const getCountries = async () => {
  //   setLoading(true)
  //   try {
  //     const { data } = await axios.get<CountryType[]>(
  //       'https://restcountries.com/v3.1/all'
  //     )
  //     setCountries(data)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   getCountries()
  // }, [])

  useEffect(() => {
    dispatch(fetchCountries())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Loading loading={countries.loading}>
        {countries.data?.map((country) => (
          <Country country={country} key={country.name.common} />
        ))}
      </Loading>
    </div>
  )
}
export default App
