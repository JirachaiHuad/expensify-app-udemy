// Hight Order Conponent (HOC) - a component that renders another component.
// HOC is for ---
// > Reuse code
// > Render hijacking
// > Prop manipulation
// > Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => { // func that return HOC
  return (props) => (  // HOC as functional component
    <div>
      {props.isAdmin && <p>This is private info. Don't Share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated
        ? <WrappedComponent {...props}/>
        : <p>Please login!</p>
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='this is the detail.' />, document.getElementById('app')); 

ReactDOM.render(<AuthInfo isAuthenticated={true} info='this is the detail.' />, document.getElementById('app')); 