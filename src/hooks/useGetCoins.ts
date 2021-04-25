export async function useGetCoins(){
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
  const jsonData = await response.json();
  return jsonData.map(x => ({ 
    name: x.name, 
    symbol: x.symbol, 
    currentPrice: x.current_price,
    image: x.image,
    volume: x.total_volume, 
    percent1h: x.price_change_percentage_1h_in_currency, 
    percent24h: x.price_change_percentage_24h_in_currency,
    percent7d: x.price_change_percentage_7d_in_currency,
    marketCap: x.market_cap,
    chart7d: x.sparkline_in_7d.price
  }));
}