import { useContext, useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2'
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import steps from '../Steps/steps';
import * as Yup from 'yup';
import { StoreContext } from '../App';
import { ErrorMessage, Field, FieldProps, Formik } from 'formik';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import '../style/credit-cards-custom.css'
import { Card } from '../interfaces-types/PagesInterface';
import { isAfter, parse } from 'date-fns';
import * as F from "../style/FormStyle"
import * as SX from '../style/MuiStyle'

const FormCard = () => {
    const store = useContext(StoreContext);
    const [typePayment, setTypePayment] = useState('')
    const [focusCard, setFocusCard] = useState<Focused>('number');
    const validationSchema = Yup.object({
        numeroCartao: Yup.string().test(
            'numeroCartao',
            'Campo incorreto',
            function (value) {
                if (!value) return false;
                if (value[value.length - 1] === '_') return false
                return true
            }
        ).required('Campo obrigatório'),
        nomeCartao: Yup.string().required('Campo obrigatório'),
        validadeCartao: Yup.string().test(
            'validadeCartao',
            'Campo incorreto',
            function (value) {
                if (!value) return false;
                const [mes, ano] = value.split('/')
                if (!mes || !ano) return false;
                const dataExpValida = parse(`01/${mes}/20${ano}`, 'dd/MM/yyyy', new Date());
                const dataAtual = new Date();
                return isAfter(dataExpValida, dataAtual);

            }
        ).required('O documento é obrigatório'),
        cvcCartao: Yup.string().required('Campo obrigatório'),
    })

    const initialValues = {
        numeroCartao: '',
        nomeCartao: '',
        validadeCartao: '',
        cvcCartao: '',
    }

    const handleSubmit = (values: Card) => {
        toast.success('Compra feita com sucesso!', {
            style: F.toastStyle,
            duration: 5000
        });
        store?.addCard(values);
        console.log({
            User: store?.person,
            Address: store?.address,
            Card: store?.card
        });

    }
    const handleCvcBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (!value.trim() || value.length < 3) {
            setFocusCard('number'); // Defina o estado focusCard como 'number' se o campo CVC estiver vazio ou tiver menos de três dígitos
        }
    };

    return (
        <F.Formbox>
            <Toaster />
            <Stepper activeStep={3} alternativeLabel>
                {steps.map(({ key, label }) => (
                    <Step key={key} sx={SX.StepSX}>
                        <StepLabel><F.BoxFormik>{label}</F.BoxFormik ></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Button
                onClick={() => {
                    setTypePayment('boleto');
                }}
                sx={F.ButtonLeft}
                variant="outlined">Boleto</Button>
            <Button
                onClick={() => {
                    setTypePayment('cartao');
                }}
                sx={F.ButtonRight}
                variant="outlined">Cartão de Crédito</Button>
            <F.TicketOrCard>
                {typePayment === 'cartao' || typePayment === '' ? (
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values }) => (
                            <F.FormFormikCard>

                                <F.FormCard>
                                    <Cards
                                        number={values.numeroCartao}
                                        name={values.nomeCartao}
                                        expiry={values.validadeCartao}
                                        cvc={values.cvcCartao}
                                        focused={focusCard}
                                    />
                                </F.FormCard>

                                <F.FormCard>
                                    <div>
                                        <Field name="numeroCartao">
                                            {({ field }: FieldProps) => (
                                                <F.StyledInputMask
                                                    {...field}
                                                    mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                                                    placeholder="0000 0000 0000 0000"
                                                    onFocus={() => setFocusCard('number')}
                                                />
                                            )}
                                        </Field>
                                        <F.DivErrorMsg>
                                            <ErrorMessage name="numeroCartao" component={F.ErrorMsg} />
                                        </F.DivErrorMsg>
                                    </div>
                                    <div>
                                        <Field as={F.StyledInput} type="text" name="nomeCartao" onFocus={() => setFocusCard('name')} placeholder="Nome do Cartao" />
                                        <F.DivErrorMsg>
                                            <ErrorMessage name="nomeCartao" component={F.ErrorMsg} />
                                        </F.DivErrorMsg>
                                    </div>
                                    <div>
                                        <Field name="validadeCartao">
                                            {({ field }: FieldProps) => (
                                                <F.StyledInputMask
                                                    {...field}
                                                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                                                    placeholder="00/00"
                                                    onFocus={() => setFocusCard('expiry')}
                                                />
                                            )}
                                        </Field>
                                        <F.DivErrorMsg>
                                            <ErrorMessage name="validadeCartao" component={F.ErrorMsg} />
                                        </F.DivErrorMsg>
                                    </div>
                                    <div>
                                        <Field name="cvcCartao">
                                            {({ field }: FieldProps) => (
                                                <F.StyledInputMask
                                                    {...field}
                                                    mask={[/\d/, /\d/, /\d/]}
                                                    placeholder="000"
                                                    onFocus={() => setFocusCard('cvc')}
                                                    onBlur={handleCvcBlur}
                                                />
                                            )}
                                        </Field>
                                        <F.DivErrorMsg>
                                            <ErrorMessage name="cvcCartao" component={F.ErrorMsg} />
                                        </F.DivErrorMsg>
                                    </div>
                                    <Button
                                        type="submit"
                                        sx={SX.ButtonSX}
                                        variant="outlined">Comprar</Button>
                                </F.FormCard>
                            </F.FormFormikCard>
                        )}
                    </Formik>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={() => {
                                toast.success(`Boleto Enviado para o email: ${store?.person.email}`, {
                                    style: F.toastStyle,
                                    duration: 5000
                                })
                            }}
                            sx={SX.ButtonBoletoSX}
                            variant="outlined">Gerar boleto e enviar via email.</Button>
                    </div>
                )}
            </F.TicketOrCard>

        </F.Formbox>
    );
};

export default FormCard;