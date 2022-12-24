import { createStoreHook } from 'react-redux';
import RootReducer from '../reducers';

const RootStore = createStoreHook(RootReducer);
export default RootStore;