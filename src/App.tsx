import { Redirect, Route } from 'react-router-dom'
import { useEffect } from 'react'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { bookOutline, personOutline } from 'ionicons/icons'
import HomePage from './pages/home'
import MyPage from './pages/my'
import IssuePage from './pages/issue'

/* normalize */
import 'normalize.css'
import './theme/custom-normalize.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('dark')
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/tabs/home" />
          </Route>
          <Route path="/tabs">
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tabs/home">
                  <HomePage />
                </Route>
                <Route exact path="/tabs/my">
                  <MyPage />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="read" href="/tabs/home">
                  <IonIcon icon={bookOutline} />
                  <IonLabel>阅读</IonLabel>
                </IonTabButton>
                <IonTabButton tab="my" href="/tabs/my">
                  <IonIcon icon={personOutline} />
                  <IonLabel>我的</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
          <Route path="/issue">
            <IssuePage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
