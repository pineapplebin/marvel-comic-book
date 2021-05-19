import { IonContent, IonPage } from '@ionic/react'
import styles from './styles.module.css'

const MyPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p>hello this is my page</p>
        <div className={styles.block}></div>
      </IonContent>
    </IonPage>
  )
}

export default MyPage
