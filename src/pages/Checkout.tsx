import { observer } from "mobx-react";
import { StoreContext } from '../App'
import { useContext, useState } from "react"
import FormAddress from "./FormAddress";
import FormUser from "./FormUser";
import FormCard from "./FormCard";
import * as V from "../style/VehiclesStyle"
import * as C from "../style/CheckoutStyle"

export const Checkout = observer(() => {
    const store = useContext(StoreContext);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleFormSubmit = () => {
        setIsFormSubmitted(!isFormSubmitted);
    };

    return (
        <V.Container>
            <V.RGBA>
                <C.Form>
                    {!store?.person.cpf_cnpj && !isFormSubmitted && <FormUser onSubmit={handleFormSubmit} />}
                    {store?.person.cpf_cnpj && isFormSubmitted && <FormAddress onSubmit={handleFormSubmit} />}
                    {store?.person.cpf_cnpj && store?.address.cep && !isFormSubmitted && <FormCard />}
                </C.Form>
                <C.Vehicle>
                    <C.VehicleUnit>
                        <C.VehiclesItem>
                            <C.VehiclesLabel>Nome: </C.VehiclesLabel>
                            <C.VehicleValue>{store?.urlVehicles.name} </C.VehicleValue>
                        </C.VehiclesItem>
                        <C.VehiclesItem>
                            <C.VehiclesLabel>Comprimento em metros:</C.VehiclesLabel>
                            <C.VehicleValue>{store?.urlVehicles.length}</C.VehicleValue>
                        </C.VehiclesItem>
                        <C.VehiclesItem>
                            <C.VehiclesLabel>Quantidade de pessoas para pilotar: </C.VehiclesLabel>
                            <C.VehicleValue>{store?.urlVehicles.crew}</C.VehicleValue>
                        </C.VehiclesItem>
                        <C.VehiclesItem>
                            <C.VehiclesLabel>Fabricante(s): </C.VehiclesLabel>
                            <C.VehicleValue>{store?.urlVehicles.manufacturer}</C.VehicleValue>
                        </C.VehiclesItem>
                        <C.VehiclesItem>
                            <C.VehiclesLabel>Capacidade máxima em Kg: </C.VehiclesLabel>
                            <C.VehicleValue>{store?.urlVehicles.cargo_capacity === 'none' || store?.urlVehicles.cargo_capacity === 'unknown'
                                ? '-' : store?.urlVehicles.cargo_capacity}</C.VehicleValue>
                        </C.VehiclesItem>
                    </C.VehicleUnit>
                </C.Vehicle>
            </V.RGBA>
        </V.Container>
    );
});

export default Checkout;