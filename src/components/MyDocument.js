import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { DefaultPalette } from '@fluentui/react';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
    page: { fontSize: 10 },
    root: { margin: '15px' },
    header: { flexDirection: 'row' },
    section1: { flex: 1, textAlign: 'center', justifyContent: 'center' },
    section2: { flex: 1, textAlign: 'center' },
    section3: { flexDirection: 'row', height: '3vh', marginTop: '5px', justifyContent: "center", alignItems: "center" },
    subsection: { height: '3vh', backgroundColor: DefaultPalette.blue },
    subsection1: { height: '3vh', border: `1px solid ${DefaultPalette.blue}`, backgroundColor: DefaultPalette.blueDark, color: 'white', fontSize: 16, fontWeight: 'bold 600' },
    subsection2: { height: '3vh', border: `1px solid ${DefaultPalette.blue}`, backgroundColor: DefaultPalette.blueDark, color: 'white', fontWeight: 'bold' },
    subsection3: { height: '3vh', border: '1px solid black', borderBottom: '0px', justifyContent: 'center' },
    divider: { borderTop: '3px solid black', marginTop: '5px' },
    spacewhite: { width: '50%' },
    col: { padding: '15px' },
    col1: { padding: '5px', width: '50%' },
    cajon: { border: '2px solid black', flexDirection: 'row' },
    details: { flexDirection: 'colum', height: 'auto', marginTop: '15px' },
    headerdetails: { backgroundColor: DefaultPalette.blueDark, justifyContent: 'center', alignItems: 'center', height: '3vh', color: 'white' },
    content: { flexDirection: 'row', margin: '15px 0px 0px' },

    header2: { flexDirection: 'row', margin: '15px 0px 0px', backgroundColor: DefaultPalette.blue, height: '4vh', color: 'white', alignItems: 'center' },

    textheader1: { width: '20%', fontSize: 8, textAlign: 'center' },
    textheader2: { width: '35%', fontSize: 8, paddingLeft: '5px' },
    textheader3: { width: '20%', fontSize: 8, textAlign: 'right', },

    divider1: { borderTop: '3px solid black', marginTop: '15px' },
    
    subcontent1: { paddingBottom: '10px', paddingTop: '10px' },
    subcontent2: { paddingBottom: '10px', paddingTop: '10px', color: 'red' },

    content1: { width: '20%', fontSize: 8, textAlign: 'left' },
    content2: { width: '35%', fontSize: 8, textAlign: 'left' },
    content3: { width: '20%', fontSize: 8, textAlign: 'right' },

    subtotales: { flexDirection: 'row' },
    totales: { flexDirection: 'row' },
    totales1: { width: '20%', fontSize: 10, paddingLeft: '20px', backgroundColor: DefaultPalette.blueDark, textAlign: 'right', color: 'white', fontWeight: 'bold' },
    sign: { flexDirection: 'row', margin: '15px 0 15px 0', alignItems: 'center' },
    signin: { flexGrow: 1, alignItems: 'center', paddingTop: '125px' }
});

export const MyDocument = ({ source, deductions }) => {

    const benefitPlanId = (benefit) => {
        return (
            <>
                {
                    benefit?.map((item, index) => (
                        <Text key={index} style={styles.subcontent1}>{item.BenefitPlanId}</Text>
                    ))
                }
            </>
        )
    }

    const description = (desc) => {
        return (
            <>
                {
                    desc?.map((item, index) => (
                        <Text key={index} style={styles.subcontent1}>{item.Description}</Text>
                    ))
                }
            </>
        )
    }

    const currencyAmount = (data) => {
        return (
            <>
                {
                    data?.map((acc, index) => (
                        <Text key={index} style={styles.subcontent2}>{acc.AccountingCurrencyAmount}</Text>
                    ))
                }
            </>
        )
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.root}>

                    {/* Header del volante de pago */}
                    <View style={styles.header}>
                        <View style={styles.section1}>
                            <Text>Logo</Text>
                        </View>
                        <View style={styles.section2}>
                            <Text style={styles.subsection}></Text>
                            <Text style={styles.subsection1}>VOLANTE DE PAGO HISTORICO</Text>
                            <Text style={styles.subsection2}>DESDE: {source.PeriodStartDate}  HASTA: {source.PeriodEndDate}</Text>
                            <Text style={styles.subsection3}>ADMINISTRATIVA UFHEC</Text>
                        </View>
                    </View>

                    {/* Linea divisora */}
                    <View style={styles.divider}></View>

                    {/* Fecha de emision de este recibo */}
                    <View style={styles.section3}>
                        <View style={styles.spacewhite}>
                            <Text></Text>
                        </View>
                        <View style={styles.col}>
                            <Text>Emitido en fecha</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>{source.PaymentDate}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>{dayjs(new Date()).format('HH:mm:ss')}</Text>
                        </View>
                    </View>

                    {/* Descripcion del empleado */}
                    <View style={styles.cajon}>
                        <View style={styles.col1}>
                            <Text>Colaborador           :  {source.Name} </Text>
                            <Text>No de colaborador :  {source.PersonnelNumber}</Text>
                            <Text>cedula                    :  {source.EmploymentLegalEntity}</Text>
                            <Text>cargo:                     :  {source.TitleId}</Text>
                        </View>
                        <View style={styles.col1}>
                            <Text>Dpto: </Text>
                            <Text></Text>
                            <Text>Frecuencia: {source.PayCycleId}</Text>
                            <Text></Text>
                        </View>
                    </View>

                    {/* Detalles del salario */}
                    <View style={styles.details}>
                        {/* Primer header */}
                        <View style={styles.headerdetails}>
                            <Text>DETALLE DE INGRESOS Y DESCUENTOS</Text>
                        </View>
                        {/* Segundo header */}
                        <View style={styles.header2}>
                            <View style={styles.textheader1}>
                                <Text>COD</Text>
                            </View>
                            <View style={styles.textheader2}>
                                <Text>CONCEPTO</Text>
                            </View>
                            <View style={styles.textheader3}>
                                <Text>INGRESOS</Text>
                            </View>
                            <View style={styles.textheader3}>
                                <Text>DESCUENTOS</Text>
                            </View>
                            <View style={styles.textheader1}>
                                <Text>BALANCE</Text>
                            </View>
                        </View>
                        {/* linea divisora */}
                        <View style={styles.divider1}></View>

                        {/* Contenido del del detalle del salario */}
                        <View style={styles.content}>
                            <View style={styles.content1}>
                                <Text style={styles.subcontent1}>Salary</Text>
                                {benefitPlanId(deductions)}
                            </View>
                            <View style={styles.content2}>
                                <Text style={styles.subcontent1}>Salario</Text>
                                {description(deductions)}
                            </View>
                            <View style={styles.content3}>
                                <Text style={styles.subcontent1}>
                                    {source.GrossPay}
                                </Text>
                            </View>
                            <View style={styles.content3}>
                                <Text style={{ paddingBottom: '10px', paddingTop: '10px', color: 'transparent' }}>Salario</Text>
                                {currencyAmount(deductions)}
                            </View>
                            <View style={styles.content1}>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={styles.divider1}></View>
                    </View>

                    {/* Subtotales del salario */}
                    <View style={styles.subtotales}>
                        <View style={styles.content1}>
                            <Text></Text>
                        </View>
                        <View style={styles.content2}>
                            <Text style={{ textAlign: 'right' }}>TOTALES</Text>
                        </View>
                        <View style={styles.content1}>
                            <Text style={{ textAlign: 'right' }}>{source.GrossPay}</Text>
                        </View>
                        <View style={styles.content1}>
                            <Text style={{ textAlign: 'right' }}>5.427.27</Text>
                        </View>
                        <View style={styles.content1}>
                        </View>
                    </View>

                    {/* Monto neto a cobrar */}
                    <View style={styles.totales}>
                        <View style={styles.content1}>
                            <Text></Text>
                        </View>
                        <View style={styles.content2}>
                            <Text style={{ textAlign: 'right' }}></Text>
                        </View>
                        <View style={styles.content1}>
                        </View>
                        <View style={styles.totales1}>
                            <Text style={{ textAlign: 'left', fontSize: 9 }}>NETO A COBRAR:</Text>
                        </View>
                        <View style={styles.totales1}>
                            <Text style={{ textAlign: 'left' }}>{source.NetPay}</Text>
                        </View>
                    </View>

                    {/* Footer firmas */}
                    <View style={styles.sign}>
                        <View style={styles.signin}>
                            <Text>______________</Text>
                            <Text style={{ fontSize: 8 }}>RECIBIDO POR</Text>
                        </View>
                        <View style={styles.signin}>
                            <Text>______________</Text>
                            <Text style={{ fontSize: 8 }}>CEDULA</Text>
                        </View>
                        <View style={styles.signin}>
                            <Text>______________</Text>
                            <Text style={{ fontSize: 8 }}>FECHA</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document >

    )
};
