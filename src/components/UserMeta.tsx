import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserInformation } from 'fixtures/ChatFixture';

const UserMeta = () => (
  <View style={styles.userMetaContainer}>
    <Text style={styles.userDescription}>{UserInformation.description}</Text>
    <Text style={styles.userMetaStats}>
      {UserInformation.joinedText} - {UserInformation.followers} Takipçi
    </Text>
    <View style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  userMetaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  userDescription: {
    color: 'white',
    marginBottom: 8,
  },
  userMetaStats: {
    color: 'white',
    opacity: 0.5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    opacity: 0.2,
    marginVertical: 16,
  },
});

export default UserMeta;
