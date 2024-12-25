import { Navigate, useOutletContext } from 'react-router-dom';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { loggedIn } = useOutletContext<{ loggedIn: boolean }>();
    return loggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
