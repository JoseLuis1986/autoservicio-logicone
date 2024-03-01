import React, { useContext, useState } from 'react'
import { Pivot, PivotItem, Stack } from '@fluentui/react';
import {
    Button,
    Input,
} from "@fluentui/react-components";
import { useLocation, useNavigate } from 'react-router-dom'
import { Earnings } from './Earnings';
import { Deductions } from './Deductions';
import { Accumulations } from './Accumulations'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../../components/MyDocument';
import { AuthContext } from '../../auth/AuthContext';
import { Contributions } from './Contributions';
import { useFetch } from '../../hooks/useFetch';
import { TaxDeductions } from './TaxDeductions';

const stackTokens = {
    childrenGap: 5,
    padding: 10,
};

export const SalaryDescription = () => {
    const [viewPdf, setViewPdf] = useState(false);
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        BatchNumber,
        DisbursementFormat,
        Name,
        PayCycleId,
        PayPeriod,
        PayStatementNumber,
        PaymentDate,
        PaymentRunType,
        PersonnelNumber
    } = location.state;
    const urlBase = 'payments/deductions'
    const params = new URLSearchParams({ PayStatementNumber })
    const url = urlBase + '?' + params;
    const [{ data, loading, error }] = useFetch(url);
    const dataFiltered = data?.filter((item) => item.IsEmployer === "No");
    const handlePdf = () => {
        setViewPdf(true)
    }

    const dataForDoc = {
        ...auth.user,
        ...location.state
    }

    console.log(dataForDoc);

    return (
        <>
            <div style={{ textAlign: "end" }}>
                <Button onClick={() => handlePdf()}>Imprimir volante de pago</Button>
            </div>
            {
                viewPdf ?
                    (
                        <Button onClick={() => setViewPdf(false)}>Cerrar pdf</Button>
                    ) : (
                        <Button onClick={() => navigate('/salary-receipt')}>Volver</Button>
                    )
            }
            {
                viewPdf
                    ?
                    (
                        //dataSalary={location.state} dataUser={auth.user} dataDeductions={data} 
                        <PDFViewer style={{ width: '100%', height: '90vh' }}>
                            <MyDocument source={dataForDoc} deductions={dataFiltered} />
                        </PDFViewer>
                    ) : (
                        <div style={{ backgroundColor: "#fafafafa", marginLeft: "25px" }}>
                            <div style={{ width: '1000px' }}>
                                <h4>
                                    {PayStatementNumber}: {Name}
                                </h4>
                                <Stack enableScopedSelectors horizontal tokens={stackTokens}>
                                    <Stack.Item grow={4}>

                                        <h5>Fecha de pago</h5>
                                        <Input appearance="underline" name="pay" value={!!PaymentDate && PaymentDate} />

                                        <h5>Formato de desembolso</h5>
                                        <Input appearance="underline" name="desemb" value={!!DisbursementFormat && DisbursementFormat} />

                                    </Stack.Item>

                                    <Stack.Item grow={4}>
                                        <h5>Ciclo de pago</h5>
                                        <Input appearance="underline" name="cyclepay" value={!!PayCycleId && PayCycleId} />

                                        <h5>Período de pago</h5>
                                        <Input appearance="underline" name="period" value={!!PayPeriod && PayPeriod} />

                                    </Stack.Item>

                                    <Stack.Item grow={4}>
                                        <h5>Número de estado de cuenta de pago</h5>
                                        <Input appearance="underline" name="statepay" value={!!PayStatementNumber && PayStatementNumber} />

                                        <h5>Número de lote</h5>
                                        <Input appearance="underline" name="numlot" value={!!BatchNumber && BatchNumber} />

                                    </Stack.Item>


                                    <Stack.Item grow={4}>
                                        <h5>Número de personal</h5>
                                        <Input appearance="underline" name="numpersonal" value={!!PersonnelNumber && PersonnelNumber} />

                                        <h5>Tipo de ejecución de pago</h5>
                                        <Input appearance="underline" name="execpay" value={!!PaymentRunType && PaymentRunType} />
                                    </Stack.Item>
                                </Stack>
                            </div>
                            <div style={{ width: '1000px' }}>
                                <Pivot aria-label="Basic Pivot">
                                    <PivotItem
                                        headerText="Ganancias"
                                        headerButtonProps={{
                                            'data-order': 1,
                                            'data-title': 'Directions',
                                        }}
                                    >
                                        <Earnings PersonnelNumber={PersonnelNumber} PayStatementNumber={PayStatementNumber} />
                                    </PivotItem>

                                    <PivotItem headerText="Deducciones del beneficio">
                                        <Deductions data={data} loading={loading} />
                                    </PivotItem>
                                    <PivotItem headerText="Contribuciones del beneficio">
                                        <Contributions data={data} loading={loading} />
                                    </PivotItem>
                                    <PivotItem headerText="Deducciones de impuesto">
                                        <TaxDeductions PayStatementNumber={PayStatementNumber} />
                                    </PivotItem>
                                    {/* <PivotItem headerText="Deducciones del beneficio">
                                            <Deductions />
                                        </PivotItem>

                                        <PivotItem headerText="Contribuciones de impuestos">
                                            <TaxContributions />
                                        </PivotItem> 
                                    */}

                                    <PivotItem headerText="Acumulaciones de beneficios">
                                        <Accumulations PayStatementNumber={PayStatementNumber} />
                                    </PivotItem>
                                </Pivot>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
