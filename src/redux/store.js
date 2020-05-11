import { createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducer";
import rootSaga from './middleware';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
export { store};