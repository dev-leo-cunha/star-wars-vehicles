import React, { useState, useContext } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { StoreContext } from '../App';
import steps from '../Steps/steps';
import { Address, FormUserProps } from '../interfaces-types/PagesInterface';
import * as F from "../style/FormStyle"
import * as SX from '../style/MuiStyle'
import { Cep } from '../api/Req';

let formik: any;
const FormAddress = ({ onSubmit }: FormUserProps) => {

    const store = useContext(StoreContext);
    const [address, setAddress] = useState<Address>({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        estado: '',
    });
    const fetchAddressByCep = async (cep: string) => {
        try {
            const res = await Cep(cep);
            if (!res.cep) {
                return;
            }
            formik.setValues({
                ...formik.values,
                cep: res.cep,
                rua: res.logradouro,
                complemento: res.complemento,
                cidade: res.localidade,
                bairro: res.bairro,
                estado: res.uf,
            })
        } catch (error) {
            console.log('Erro ao buscar CEP:', error);
        }
    };
    const validationSchema = Yup.object({
        cep: Yup.string()
            .required('Campo obrigatório'),
        rua: Yup.string()
            .required('Campo obrigatório'),
        numero: Yup.string()
            .required('Campo obrigatório'),
        complemento: Yup.string(),
        cidade: Yup.string()
            .required('Campo obrigatório'),
        bairro: Yup.string()
            .required('Campo obrigatório'),
        estado: Yup.string()
            .required('Campo obrigatório'),
    });
    const initialValues = {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        estado: '',
    };
    const handleSubmit = (values: Address) => {
        store?.addAddress(values);
        onSubmit();
    };
    return (
        <F.Formbox>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map(({ key, label }) => (
                    <Step key={key} sx={SX.StepSX}>
                        <StepLabel><F.BoxFormik>{label}</F.BoxFormik></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                innerRef={(formikRef: any) => (formik = formikRef)}
            >
                <F.FormFormik>
                    <Field
                        type="text"
                        as={F.StyledInput}
                        placeholder="CEP"
                        name="cep"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const cep = e.target.value;
                            setAddress((prevAddress) => ({
                                ...prevAddress,
                                cep,
                            }));
                            if (cep.length === 8) {
                                fetchAddressByCep(cep);
                            }
                        }}
                        value={address.cep}
                    />
                    <F.DivErrorMsg>
                        <ErrorMessage name="cep" component={F.ErrorMsg} />
                    </F.DivErrorMsg>
                    <F.Label>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Logradouro" name="rua" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="rua" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Número" name="numero" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="numero" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                    </F.Label>
                    <F.Label>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Complemento" name="complemento" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="complemento" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Cidade" name="cidade" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="cidade" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                    </F.Label>
                    <F.Label>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Bairro" name="bairro" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="bairro" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                        <div>
                            <Field as={F.StyledInput} type="text" placeholder="Estado" name="estado" />
                            <F.DivErrorMsg>
                                <ErrorMessage name="estado" component={F.ErrorMsg} />
                            </F.DivErrorMsg>
                        </div>
                    </F.Label>
                    <Button
                        type="submit"
                        sx={SX.ButtonSX}
                        variant="outlined">Prosseguir</Button>
                </F.FormFormik>
            </Formik>
        </F.Formbox >
    );
};

export default FormAddress;