import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { routes } from './routes/routes'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route element={<Layout />}>
        {routes.map((route,idx) => (
          <Route
          key={idx}
          path={route.path}
          element={<route.component />}
          index={route.Index}
          />
        ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
