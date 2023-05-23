import { useQuery } from '@tanstack/react-query';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { getCoinPrice, getCoinData } from '../../api/coins';

export default function CoinCard({ id, item }) {
  const { data: coinPrice, isLoading: coinPriceIsLoading } = useQuery({
    queryKey: ['coin-price', id],
    queryFn: () => getCoinPrice(id),
  });

  const { data: coinData, isLoading: coinDataIsLoading } = useQuery({
    queryKey: ['coin-data', id],
    queryFn: () => getCoinData(id),
  });

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        {!coinDataIsLoading && (
          <>
            <Image
              style={styles.thumbnail}
              source={{
                uri: coinData?.image?.large,
              }}
            />
            <View>
              <Text style={styles.text}>
                {coinData.name}{' '}
                {coinData.symbol && `(${coinData.symbol?.toUpperCase()})`}
              </Text>
            </View>
          </>
        )}
      </View>

      <View style={styles.rightContainer}>
        {!coinPriceIsLoading && (
          <View>
            <Text style={styles.text}>{coinPrice[id]?.usd}$</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});
