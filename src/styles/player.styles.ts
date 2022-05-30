import { keyframes } from '@chakra-ui/react';
import { musicIcon } from '../components/icons/MusicNoteIcon';

const backgroundConfig = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.8, 0],
  scale: [0.1, 0.9],
  body: musicIcon,
  position: 'all',
  color: ['purple.800'],
  cross: 'dead',
  random: 10,
  g: 5,
};

const blink = keyframes`
  50% {
    background: #FFB5E2
    ;
  }
`;

const playerStyle = {
  backgroundConfig,
  blink,
};

export default playerStyle;
