import { Square } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import useSound from 'use-sound';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  toggleAudioAction,
  updatePlayingMusic,
} from '../../state/actions/audio.actions';
import { RootState } from '../../state/store';
import styles from '../../styles/player.styles';

type Props = {
  isWaiting: boolean;
  song: string;
  isPadSelected: boolean;
};

function Pad({ isWaiting, song, isPadSelected }: Props): React.ReactElement {
  const { isPlaying } = useAppSelector((state: RootState) => state.audio);
  const dispatch = useAppDispatch();
  const [play, { stop }] = useSound(song, {
    onend: function () {
      dispatch(updatePlayingMusic());
    },
    loop: true,
  });

  useEffect(() => {
    if (!isWaiting) {
      if (isPlaying && isPadSelected) {
        play();
      } else {
        stop();
      }
    }
  }, [isPlaying, isWaiting, isPadSelected, song, play, stop]);

  return (
    <Square
      size={20}
      borderColor="purple.800"
      borderWidth="8px"
      onClick={() => dispatch(toggleAudioAction(song))}
      cursor="pointer"
      borderRadius="2xl"
      borderStyle={isPadSelected ? 'inset' : 'outset'}
      animation={
        isPadSelected && isWaiting ? `${styles.blink} 1s infinite` : 'none'
      }
      bg={isPadSelected ? 'purple.800' : ''}
    ></Square>
  );
}

export default Pad;
