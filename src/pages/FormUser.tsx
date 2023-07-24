import { Formik, Field, ErrorMessage, FieldProps } from 'formik';
import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';
import * as Yup from 'yup';
import { useContext } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { StoreContext } from '../App';
import steps from '../Steps/steps';
import { Person, FormUserProps } from '../interfaces-types/PagesInterface';
import * as F from "../style/FormStyle"
import * as SX from '../style/MuiStyle'

const FormUser = ({ onSubmit }: FormUserProps) => {
    const store = useContext(StoreContext);
    const validateYup = Yup.object({
        nome: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        telefone: Yup.string().required('Campo obrigatório'),
        cpf_cnpj: Yup.string().test(
            'cpf_cnpj',
            'Documento inválido',
            function (value) {
                if (!value) return false;
                const cleanedValue = value.replace(/[^\d]/g, ''); // Remove caracteres especiais
                // Verifica se é CPF
                if (cleanedValue.length === 11) { return validateCPF.isValid(cleanedValue); }
                // Verifica se é CNPJ
                if (cleanedValue.length === 14) { return validateCNPJ.isValid(cleanedValue); }

                return false;
            }
        ).required('O documento é obrigatório'),
    });

    const initialValues = {
        nome: '',
        email: '',
        telefone: '',
        cpf_cnpj: ''
    };

    const handleSubmit = (values: Person) => {
        store?.addPerson(values);
        onSubmit();
    };

    return (
        <F.Formbox>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map(({ key, label }) => (
                    <Step key={key} sx={SX.StepSX}>
                        <StepLabel><F.BoxFormik>{label}</F.BoxFormik></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Formik
                initialValues={initialValues}
                validationSchema={validateYup}
                onSubmit={handleSubmit}
            >
                <F.FormFormik>
                    <Field type="text" name="nome" placeholder="Nome" as={F.StyledInput} />
                    <F.DivErrorMsg>
                        <ErrorMessage name="nome" component={F.ErrorMsg} />
                    </F.DivErrorMsg>
                    <Field type="email" name="email" placeholder="Email" as={F.StyledInput} />
                    <F.DivErrorMsg>
                        <ErrorMessage name="email" component={F.ErrorMsg} />
                    </F.DivErrorMsg>
                    <Field name="telefone">
                        {({ field }: FieldProps) => (
                            <F.StyledInputMask
                                {...field}
                                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                placeholder="(00) 00000-0000"
                            />
                        )}
                    </Field>
                    <F.DivErrorMsg>
                        <ErrorMessage name="telefone" component={F.ErrorMsg} />
                    </F.DivErrorMsg>
                    <Field type="text" name="cpf_cnpj" placeholder="CPF/CNPJ" as={F.StyledInput} />
                    <F.DivErrorMsg>
                        <ErrorMessage name="cpf_cnpj" component={F.ErrorMsg} />
                    </F.DivErrorMsg>
                    <Button
                        type="submit"
                        sx={SX.ButtonSX}
                        variant="outlined">Prosseguir</Button>
                </F.FormFormik>
            </Formik>
        </F.Formbox>
    );
};

export default FormUser;