import { useAtom } from 'jotai';
import CoinCard from './CoinCard';
import { StyleSheet, View, FlatList } from 'react-native';
import { selectedCoins } from '../../atoms/selectedCoins';

export default function CoinsScreen() {
  const [coins, _] = useAtom(selectedCoins);

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinCard id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#eee',
  },
});
