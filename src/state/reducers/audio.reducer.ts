import { Reducer } from 'redux';
import {
  AudiosState,
  SET_AUDIOS,
  TOGGLE_AUDIO,
  TOGGLE_IS_PLAYING,
  UPDATE_PLAYING_MUSIC,
} from '../types/audio.types';

const initialState: AudiosState = {
  audios: [],
  isPlaying: false,
};

const audioReducer: Reducer<AudiosState> = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUDIO:
      return {
        ...state,
        audios: state.audios.map((audio) => {
          if (audio.song !== action.song) {
            return audio;
          }
          return {
            ...audio,
            isSelected: !audio.isSelected,
            isWaiting: state.isPlaying && !audio.isWaiting && !audio.isSelected,
          };
        }),
      };
    case TOGGLE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case SET_AUDIOS:
      return {
        ...state,
        audios: action.audios,
      };
    case UPDATE_PLAYING_MUSIC:
      return {
        ...state,
        audios: state?.audios?.map((audio) => {
          return audio.isWaiting
            ? {
                ...audio,
                isSelected: true,
                isWaiting: false,
              }
            : audio;
        }),
      };
    default:
      return state;
  }
};

export default audioReducer;
