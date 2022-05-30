import { Box, Center, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import PlayIcon from '../../components/icons/PlayIcon';
import StopIcon from '../../components/icons/StopIcon';
import ParticlesBg from 'particles-bg';
import {
  setAudios,
  toggleIsPlayingAction,
} from '../../state/actions/audio.actions';
import { Audio } from '../../state/types/audio.types';
import { RootState } from '../../state/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ControlButton from '../../components/buttons/ControlButton';
import { songs } from '../../utils/music.utils';
import Pad from './Pad';
import styles from '../../styles/player.styles';
import { hasSelectedPad } from '../../state/selectors/audios.selectors';

function Player(): React.ReactElement {
  const dispatch = useAppDispatch();
  const { audios, isPlaying } = useAppSelector(
    (state: RootState) => state.audio
  );
  const hasSelectedItems = useAppSelector(hasSelectedPad);

  useEffect(() => {
    dispatch(setAudios(songs));
  }, [dispatch]);

  useEffect(() => {
    if (!hasSelectedItems) dispatch(toggleIsPlayingAction(false));
  }, [hasSelectedItems]);

  return (
    <Box
      h="100vh"
      bg="white"
      bgGradient="linear(to-t, purple.800, black)"
      zIndex={-1}
    >
      <Center h="100vh">
        <HStack bg="gray.300" zIndex={1000} borderRadius="3xl">
          <SimpleGrid columns={3} spacing={10} p={10}>
            {audios.map((item: Audio) => {
              return (
                <Pad
                  key={item.song}
                  song={item.song}
                  isPadSelected={item.isSelected}
                  isWaiting={item.isWaiting}
                />
              );
            })}
          </SimpleGrid>
          <VStack px={8} spacing={8}>
            <ControlButton
              icon={<PlayIcon />}
              isDisabled={isPlaying || !hasSelectedItems}
              onClick={() => dispatch(toggleIsPlayingAction(true))}
            />
            <ControlButton
              icon={<StopIcon />}
              onClick={() => dispatch(toggleIsPlayingAction(false))}
            />
          </VStack>
        </HStack>
        {isPlaying && (
          <ParticlesBg
            type="custom"
            config={styles.backgroundConfig}
            bg={true}
          />
        )}
      </Center>
    </Box>
  );
}

export default Player;
