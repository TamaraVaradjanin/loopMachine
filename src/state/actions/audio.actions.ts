import { Action, Dispatch } from 'redux';
import { AppThunk } from '../store';
import {
  TOGGLE_AUDIO,
  TOGGLE_IS_PLAYING,
  UPDATE_PLAYING_MUSIC,
  SET_AUDIOS,
  Audio,
} from '../types/audio.types';

export const toggleAudioAction: AppThunk = (song: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TOGGLE_AUDIO,
      song: song,
    });
  };
};

export const toggleIsPlayingAction: AppThunk = (isPlaying: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TOGGLE_IS_PLAYING,
      isPlaying: isPlaying,
    });
  };
};

export const updatePlayingMusic: AppThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_PLAYING_MUSIC,
    });
  };
};

export const setAudios: AppThunk = (audios: Audio[]) => {
  return (dispatch: Dispatch): Action => {
    return dispatch({
      type: SET_AUDIOS,
      audios: audios,
    });
  };
};
