import { Route, Routes } from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={
              <PrivateRouter />
            } />
        </Routes>
    </>
  )
}