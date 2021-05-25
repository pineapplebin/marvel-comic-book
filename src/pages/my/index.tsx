import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import styles from './styles.module.css'

const MyPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>我的</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>hello this is my page</p>
        <div className={styles.block}></div>
      </IonContent>
    </IonPage>
  )
}

export default MyPage
