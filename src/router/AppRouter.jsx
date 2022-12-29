import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layouts';
import { Dashboard } from '../pages/dashboard';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}