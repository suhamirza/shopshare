import React, { useLayoutEffect } from 'react';
import { Box, Text, Center, Pressable } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { ListStackParamList } from '../../navigation/ListStackNavigator';

type Props = NativeStackScreenProps<ListStackParamList, 'Lists'>;

// Header right component defined outside to avoid React warnings
const NotificationHeaderButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <Pressable onPress={onPress} px="$3" py="$2">
    <Feather name="bell" color="#3b82f6" size={24} />
  </Pressable>
);

const ListsScreen: React.FC<Props> = ({ navigation }) => {
  // Create header right function outside of useLayoutEffect
  const createHeaderRight = () => (
    <NotificationHeaderButton
      onPress={() => navigation.navigate('Notifications')}
    />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: createHeaderRight,
    });
  }, [navigation]);

  return (
    <Center flex={1}>
      <Box p="$4">
        <Text size="xl" textAlign="center">
          Lists Screen
        </Text>
      </Box>
    </Center>
  );
};export default ListsScreen;
