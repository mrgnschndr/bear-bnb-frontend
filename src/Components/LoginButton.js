import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
    error
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Auth0 Error:', error);
    return null; // Don't show error to user, just log it
  }

  if (isAuthenticated) {
    return (
      <div>
        <span>Welcome, {user.name}</span>
        <button
          onClick={() => 
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              }
            })
          }
        >
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