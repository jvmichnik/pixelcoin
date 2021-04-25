export function formatCurrency(value: number){
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export function formatCurrencyText(n){
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return "R$ " + (n / 1e3).toFixed(1) + " m";
  if (n >= 1e6 && n < 1e9) return "R$ " + (n / 1e6).toFixed(1) + " mi";
  if (n >= 1e9 && n < 1e12) return "R$ " + (n / 1e9).toFixed(1) + " bi";
  if (n >= 1e12) return "R$ " + (n / 1e12).toFixed(1) + " tri";
};