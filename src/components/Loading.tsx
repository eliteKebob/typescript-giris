import { FunctionComponent } from 'react'

interface ILoadingProps {
  children: any
  loading: boolean
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props

  if (loading) {
    return <>"Loading..."</>
  }

  return <>{props.children}</>
}
export default Loading
