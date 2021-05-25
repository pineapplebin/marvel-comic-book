import { FC } from 'react'
import { IonToolbar, IonButtons, IonIcon, IonButton } from '@ionic/react'
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons'
import styles from './styles.module.css'

export interface FooterToolbarProps {
  slot?: string
}

const FooterToolbar: FC<FooterToolbarProps> = () => {
  return (
    <div className={styles.toolbar}>
      <IonToolbar>
        <IonButtons>
          <IonButton>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={arrowForwardOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </div>
  )
}

export default FooterToolbar
