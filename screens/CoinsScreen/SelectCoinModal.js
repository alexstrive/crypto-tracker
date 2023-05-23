import { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const coinList = require('../../coins.json');

export default function SelectCoinModal({ onModalAdd, visible }) {
  const [selectedCoin, setSelectedCoin] = useState();
  const [availableCoins, setAvailableCoins] = useState(coinList);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Picker
          selectedValue={selectedCoin}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCoin(itemValue);
            setAvailableCoins(
              availableCoins.filter((coin) => coin.id !== itemValue.id)
            );
            onModalAdd(itemValue);
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
