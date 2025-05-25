const CURRENY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'EUR',
    style: 'currency'
})

export function formatCurrency(number: number): string {
    return CURRENY_FORMATTER.format(number);
}