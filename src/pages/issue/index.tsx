import { FC } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import styles from './styles.module.css'

import SAMPLE from './sample.jpg'
import { useCountDownShow, useElementSize } from './hooks'
import MagicPage from './components/MagicPage'
import FooterToolbar from './components/FooterToolbar'

const IssuePage: FC = () => {
  const { show: showToolbar, handleShow: handleShowToolbar } = useCountDownShow({
    duration: 1000,
  })
  const { ref: blockRef, size } = useElementSize<HTMLDivElement>()

  return (
    <IonPage>
      <IonContent fullscreen className={styles.content} onClick={handleShowToolbar}>
        <div className={styles.readContainer} ref={blockRef}>
          <MagicPage containerSize={size} src={SAMPLE} />
        </div>
        {showToolbar && <FooterToolbar />}
      </IonContent>
    </IonPage>
  )
}

export default IssuePage
