import { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAtom } from 'jotai';
import { isModalVisibleAtom } from '../../atoms/modalPicker';
import { selectedCoinsAtom } from '../../atoms/selectedCoins';

const coinList = require('../../coins.json');

export default function SelectCoinModal() {
  const [availableCoins, setAvailableCoins] = useState(coinList);
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom);
  const [coins, setSelectedCoin] = useAtom(selectedCoinsAtom);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalView}>
        <Picker
          onValueChange={(itemValue, itemIndex) => {
            setAvailableCoins(
              availableCoins.filter((coin) => coin.id !== itemValue.id)
            );
            setSelectedCoin([...coins, itemValue]);
            setIsModalVisible(false);
          }}
        >
          {availableCoins.map((coin) => (
            <Picker.Item key={coin.id} label={coin.name} value={coin} />
          ))}
        </Picker>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    marginTop: 700,
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
