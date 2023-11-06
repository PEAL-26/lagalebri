import { useEffect, useState } from 'react';
import { Switch, TouchableOpacity, View, Animated, useAnimatedValue } from 'react-native';
import { styles } from './styles';

export function NotificationToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      // implementar o animated aqui
      console.log(!previousState);

      return !previousState;
    });
  };

  // useEffect(()=>{
  //      animated.value = useAnimatedValue(0, { useNativeDriver: true });
  // },[])

  const transition = { left: isEnabled ? 20 : 0 };
  const color = isEnabled ? '#35C75A' : '#eeeeee';

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Animated.View
        style={[
          styles.main,
          {
            backgroundColor: color,
            borderColor: color,
          },
        ]}
      >
        <Animated.View style={[styles.switch, transition]} />
      </Animated.View>
    </TouchableOpacity>
  );
}
