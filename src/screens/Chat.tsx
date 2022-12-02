import React from 'react';
import Header from 'components/Header';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Messages } from 'fixtures/ChatFixture';
import UserMeta from 'components/UserMeta';
import MessageBubble from 'components/MessageBubble';

const Chat = () => {
  const activeY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    activeY.value = event.contentOffset.y;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header activeY={activeY} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContentContainer}>
        <UserMeta />
        {Messages.map(({ text, type, id }) => (
          <MessageBubble
            isNextMessageSameType={Messages[id]?.type === type}
            key={id.toString()}
            {...{ text, type }}
          />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: Platform.select({
      android: 16,
    }),
  },
  scrollContentContainer: {
    marginTop: 160,
    paddingBottom: 160,
  },
});
export default Chat;
