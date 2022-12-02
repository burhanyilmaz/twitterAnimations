import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessageType } from './types';

type MessageBubbleProps = {
  text: string;
  type: MessageType;
  isNextMessageSameType: boolean;
};

const MessageBubble: FC<MessageBubbleProps> = ({ text, type, isNextMessageSameType }) => (
  <View
    style={[
      styles.messageContainer,
      {
        alignSelf: type === 'received' ? 'flex-start' : 'flex-end',
        backgroundColor: type === 'received' ? '#2f3336' : '#3b9bf0',
        marginBottom: isNextMessageSameType ? 4 : 16,
      },
    ]}>
    <Text style={styles.messageText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: '#1DA1F2',
    alignSelf: 'flex-end',
    padding: 16,
    marginBottom: 4,
    borderRadius: 16,
    maxWidth: 240,
    marginHorizontal: 24,
  },
  messageText: {
    color: 'white',
  },
});

export default MessageBubble;
