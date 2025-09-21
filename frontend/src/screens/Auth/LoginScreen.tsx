import React from 'react';
import { Box, Text, Center } from '@gluestack-ui/themed';

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  return (
    <Center flex={1}>
      <Box p="$4">
        <Text size="xl" textAlign="center">
          Login Screen uwu
        </Text>
      </Box>
    </Center>
  );
};

export default LoginScreen;
