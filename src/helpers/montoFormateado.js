export const MontoFormateado = (monto) => {
    const montoFormateado = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(monto);

    return montoFormateado;
};