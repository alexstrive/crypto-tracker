import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CoinsScreenRight({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      // onPress={() => setModalVisible(true)}
    >
      <Ionicons name="md-add-circle-outline" size={32} color="black" />
    </TouchableOpacity>
  );
}
