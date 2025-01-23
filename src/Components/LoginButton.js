import { useAuth0 } from '@auth0/auth0-react';

export function LoginButton() {
  const { loginWithRedirect, isAuthenticated, logout, user, error, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Auth0 Error:', error);
    return <div>Authentication Error</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <p>Welcome, {user.name}!</p>
        <button onClick={() => logout({ 
          logoutParams: {
            returnTo: window.location.origin
          }
        })}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => 
        loginWithRedirect({
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        })
      }
    >
      Log In
    </button>
  );
} 