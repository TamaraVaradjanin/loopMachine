import {
  Action,
  ActionCreator,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import audioReducer from './reducers/audio.reducer';

export const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ActionCreator<
  ThunkAction<void, RootState, unknown, Action<string>>
>;
