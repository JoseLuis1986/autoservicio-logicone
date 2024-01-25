export const MontoFormateado = (monto) => {
    const montoFormateado = new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(monto);

    return montoFormateado;
};