import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { UserInformation } from 'fixtures/ChatFixture';

type HeaderProps = {
  activeY: SharedValue<number>;
};

const Header: FC<HeaderProps> = ({ activeY }) => {
  const avatarContainerAnimatedStyle = useAnimatedStyle(() => ({
    top: interpolate(activeY.value, [1, 200], [100, 0], Extrapolate.CLAMP),
    transform: [
      {
        translateY: interpolate(activeY.value, [-160, 1], [100, 0], Extrapolate.CLAMP),
      },
    ],
  }));

  const avatarAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(activeY.value, [1, 200], [80, 30], Extrapolate.CLAMP),
    height: interpolate(activeY.value, [1, 200], [80, 30], Extrapolate.CLAMP),
  }));

  const userInfoContainerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(activeY.value, [1, 100], [1, 0], Extrapolate.CLAMP),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <Icon name="arrow-left" size={24} color="white" />
        <Icon name="info" size={24} color="white" />
      </View>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{UserInformation.fullName}</Text>
        <Icon name="check-circle" size={16} color="#1DA1F2" />
      </View>
      <Animated.View style={[styles.avatarContainer, avatarContainerAnimatedStyle]}>
        <Animated.Image
          source={{
            uri: UserInformation.avatar,
          }}
          style={[styles.avatar, avatarAnimatedStyle]}
        />
        <Animated.View style={[styles.userInfoContainer, userInfoContainerAnimatedStyle]}>
          <Text style={[styles.fullName]}>{UserInformation.fullName}</Text>
          <Text style={[styles.username]}>{UserInformation.username}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 24,
  },
  usernameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 12,
    marginTop: 12,
  },
  usernameText: {
    color: 'white',
    marginRight: 4,
    fontWeight: '900',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingBottom: 16,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  userInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  username: {
    color: 'white',
    opacity: 0.5,
    fontSize: 12,
  },
});
export default Header;
