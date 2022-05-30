import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const hasSelectedPad = createSelector(
  (state: RootState) => state.audio.audios,
  (audios) => audios.find((audio) => audio.isSelected)
);
