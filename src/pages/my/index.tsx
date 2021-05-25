import { IonButton, IonContent, IonPage } from '@ionic/react'
// import styles from './styles.module.css'

const MyPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton href="/issue">Jump</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default MyPage
