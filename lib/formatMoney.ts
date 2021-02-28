const formatter = new Intl.NumberFormat("es-Co", {
  style: "currency",
  currency: "COP",
})

export default function formatMoney(cents: number) {
  const Pesos = cents / 1000
  return formatter.format(Pesos)
}
