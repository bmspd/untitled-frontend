import './styles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import { Provider } from 'react-redux'
import { store } from './store'
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<h1>404 Page!</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
