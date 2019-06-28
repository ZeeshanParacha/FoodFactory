// import { createStore, applyMiddleware, compose } from 'redux';

// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;


import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// import { reduxFirestore , getFirestore } from 'redux-firestore';
// import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';

import fireconfig from './config/Fire';
const store = createStore(rootReducer
    // compose(
    // applyMiddleware(thunk.withExtraArgument({getFireStore , getFirebase})),
    // reduxFirestore(fireconfig),
    // reactReduxFirebase(fireconfig)
    // )

);

export default store;


