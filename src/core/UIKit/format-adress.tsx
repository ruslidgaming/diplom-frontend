// Функция для изменения формата адреса
export function formatAddress(address: string) {
    const pattern = /^Россия, Республика Татарстан \(Татарстан\),\s*/;
    let formattedAddress = address.replace(pattern, '');
    const maxlength = 35;
    return (formattedAddress.length > maxlength) ? formattedAddress.slice(0, maxlength - 1) + '…' : formattedAddress
}