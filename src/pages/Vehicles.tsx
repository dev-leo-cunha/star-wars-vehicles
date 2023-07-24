import { observer } from "mobx-react"
import { VehiclesApi, VehiclesURL } from "../api/Req"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from '../App'
import * as S from "../style/VehiclesStyle"
import * as SX from '../style/MuiStyle'
import { Pagination } from "@mui/material"

export const Vehicles = observer(() => {
    const store = useContext(StoreContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const loadVehicles = async (page: number) => {
        setLoading(true)
        const result = await VehiclesApi(page).then((res) => {
            store?.addVehicles(res.results)
        })
        setLoading(false)
        return result
    }
    const urlCheckout = async (url: string) => {
        await VehiclesURL(url).then((res) => {
            store?.vehiclesURL(res)
        })
        navigate('/checkout')
    }

    useEffect(() => {
        loadVehicles(1)
    }, [])
    return (
        <S.Container>
            <S.RGBA>
                <S.Pagination>
                    <Pagination
                        sx={SX.PaginationSX}
                        count={4} color="primary" size="large" variant="outlined" shape="rounded" onChange={(_e, page) => loadVehicles(page)}
                    />
                </S.Pagination>
                <S.Vehicles>
                    {loading ? (
                        <S.Loading>Carregando...</S.Loading>
                    ) : (
                        store?.vehicles.map((vehicles: any, index: number) => {
                            return (
                                <S.VehicleUnit
                                    key={index}
                                    onClick={() => urlCheckout(vehicles.url)}>
                                    <S.VehiclesItem>
                                        <S.VehiclesLabel>Nome: </S.VehiclesLabel>
                                        <S.VehicleValue>{vehicles.name} </S.VehicleValue>
                                    </S.VehiclesItem>
                                    <S.VehiclesItem>
                                        <S.VehiclesLabel>Comprimento em metros:</S.VehiclesLabel>
                                        <S.VehicleValue>{vehicles.length}</S.VehicleValue>
                                    </S.VehiclesItem>
                                    <S.VehiclesItem>
                                        <S.VehiclesLabel>Quantidade de pessoas para pilotar: </S.VehiclesLabel>
                                        <S.VehicleValue>{vehicles.crew}</S.VehicleValue>
                                    </S.VehiclesItem>
                                    <S.VehiclesItem>
                                        <S.VehiclesLabel>Fabricante(s): </S.VehiclesLabel>
                                        <S.VehicleValue>{vehicles.manufacturer}</S.VehicleValue>
                                    </S.VehiclesItem>
                                    <S.VehiclesItem>
                                        <S.VehiclesLabel>Capacidade máxima em Kg: </S.VehiclesLabel>
                                        <S.VehicleValue>{vehicles.cargo_capacity === 'none' || vehicles.cargo_capacity === 'unknown'
                                            ? '-' : vehicles.cargo_capacity}</S.VehicleValue>
                                    </S.VehiclesItem>
                                </S.VehicleUnit>

                            )
                        })
                    )}
                </S.Vehicles>
            </S.RGBA>
        </S.Container>
    )
})