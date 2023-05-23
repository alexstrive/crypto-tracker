export function getCoinPrice(id) {
  return fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  ).then((res) => res.json());
}

export function getCoinData(id) {
  return fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(
    (response) => response.json()
  );
}
