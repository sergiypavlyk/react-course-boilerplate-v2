// HOC
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    <div>
      {props.isAdmin && <p>private info</p>}
      <WrappedComponent {...props} />
    </div>
  };
};

// requireAuth
const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : <p>please login</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

const root = ReactDOMClient.createRoot(document.getElementById("app"));
// root.render(<Info isAdmin info="details" />);
root.render(<AuthInfo isAuth={false} info="details" />);
