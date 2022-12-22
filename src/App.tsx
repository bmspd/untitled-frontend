import './styles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import { Provider } from 'react-redux'
import { store } from './store'
import UserInfoLayer from './layers/UserInfoLayer/UserInfoLayer'
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserInfoLayer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<h1>404 Page!</h1>} />
          </Routes>
        </UserInfoLayer>
      </BrowserRouter>
    </Provider>
  )
}
