import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// этот компонент принимает другой 2 компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function ProtectedRoute ({ component: Component, component2: Component2, ...props })
{
  return(
  <Route>
    {  (props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />) }
    {  (props.loggedIn ? <Component2 {...props} /> : <Redirect to="/signin" />) }
  </Route>
  )
};

export default ProtectedRoute;




// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // этот компонент принимает другой компонент в качестве пропса
// // он также может взять неограниченное число пропсов и передать их новому компоненту
// const ProtectedRoute = ({ component: Component, ...props }) => (
//   <Route>
//     {
//         () => (props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />)
//       }
//   </Route>
// );

// export default ProtectedRoute;
