import { observable, action, IObservableArray } from "mobx";
import {
  typeUrlVehicles,
  typePersonUser,
  typeAddress,
  typeCard,
} from "../interfaces-types/StoreTypes";

export type Store = {
  vehicles: IObservableArray<string>;
  urlVehicles: typeUrlVehicles;
  addVehicles: (e: string[]) => void;
  vehiclesURL: (e: typeUrlVehicles) => void;

  person: typePersonUser;
  addPerson: (e: typePersonUser) => void;

  address: typeAddress;
  addAddress: (e: typeAddress) => void;

  card: typeCard;
  addCard: (e: typeCard) => void;
};

export const createStore = (): Store => {
  const store: Store = {
    vehicles: observable.array<string>([]),
    urlVehicles: {
      name: "",
      model: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      max_atmosphering_speed: "",
      crew: "",
      passengers: "",
      cargo_capacity: "",
      consumables: "",
      vehicle_class: "",
      pilots: [],
      films: [],
      created: "",
      edited: "",
      url: "",
    },
    addVehicles: action((e: string[]) => {
      store.vehicles.replace(e);
    }),
    vehiclesURL: action((url: typeUrlVehicles) => {
      store.urlVehicles = url;
    }),
    person: {
      nome: "",
      email: "",
      telefone: "",
      cpf_cnpj: "",
    },
    addPerson: action((e: typePersonUser) => {
      store.person = e;
    }),
    address: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      cidade: "",
      bairro: "",
      estado: "",
    },
    addAddress: action((e: typeAddress) => {
      store.address = e;
    }),
    card: {
      numeroCartao: "",
      nomeCartao: "",
      validadeCartao: "",
      cvcCartao: "",
    },
    addCard: action((e: typeCard) => {
      store.card = e;
    }),
  };
  return store;
};
