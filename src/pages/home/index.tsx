import { IonPage } from '@ionic/react'
import { fetchComicvine } from 'src/services/request'
import useSWR from 'swr'

const fetcher = async (name: string) => {
  return fetchComicvine({
    path: '/volumes',
    filter: { name },
  })
}

const HomePage: React.FC = () => {
  const { data, error } = useSWR('house of x', fetcher)
  console.log(data, error)

  return <IonPage></IonPage>
}

export default HomePage
