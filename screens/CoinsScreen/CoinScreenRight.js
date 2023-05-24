import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAtom } from 'jotai';
import { isModalVisibleAtom } from '../../atoms/modalPicker';

export default function CoinsScreenRight() {
  const [_, setIsModalVisible] = useAtom(isModalVisibleAtom);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsModalVisible(true);
      }}
    >
      <Ionicons name="md-add-circle-outline" size={32} color="black" />
    </TouchableOpacity>
  );
}
