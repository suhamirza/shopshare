import React from 'react';
import { Box, Text, Center } from '@gluestack-ui/themed';

interface Props {}

const NotificationsScreen: React.FC<Props> = () => {
  return (
    <Center flex={1}>
      <Box p="$4">
        <Text size="xl" textAlign="center">
          Notifications Screen
        </Text>
      </Box>
    </Center>
  );
};

export default NotificationsScreen;
