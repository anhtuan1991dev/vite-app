import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { routes } from './routes'

// redux
import { Provider } from "react-redux";
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
