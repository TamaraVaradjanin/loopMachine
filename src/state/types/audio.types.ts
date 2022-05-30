export const TOGGLE_AUDIO = '[AUDIO] TOGGLE_AUDIO';
export const TOGGLE_IS_PLAYING = '[AUDIO] TOGGLE_IS_PLAYING';
export const UPDATE_PLAYING_MUSIC = '[AUDIO] UPDATE_PLAYING_MUSIC';
export const SET_AUDIOS = '[AUDIO] SET_AUDIOS';

export type Audio  = {
  song: string;
  isSelected: boolean;
  isWaiting: boolean;
}

export type AudiosState = {
  audios: Audio[];
  isPlaying: boolean;
}
