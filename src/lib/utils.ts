export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-LK')}`;
}

export function calculateDiscount(originalPrice?: number, currentPrice?: number): number | undefined {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return undefined;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

