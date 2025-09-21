import React from 'react';
import { Box, Text, Center } from '@gluestack-ui/themed';

interface Props {}

const CreateListScreen: React.FC<Props> = () => {
  return (
    <Center flex={1}>
      <Box p="$4">
        <Text size="xl" textAlign="center">
          Create List Screen
        </Text>
      </Box>
    </Center>
  );
};

export default CreateListScreen;
