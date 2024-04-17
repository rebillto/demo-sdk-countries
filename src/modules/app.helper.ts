import { CustomerMap } from "./app.types";

export const countries = [
  {
    id: 1,
    name: "Argentina",
    currency: "ARS",
    countryFlag: "🇦🇷",
  },
  {
    id: 2,
    name: "Brazil",
    countryFlag: "🇧🇷",
    currency: "BRL",
  },
  {
    id: 3,
    name: "Chile",
    countryFlag: "🇨🇱",
    currency: "CLP",
  },
  {
    id: 4,
    name: "Peru",
    countryFlag: "🇵🇪",
    currency: "PEN",
  },
  {
    id: 5,
    name: "Colombia",
    countryFlag: "🇨🇴",
    currency: "COP",
  },
  {
    id: 6,
    name: "Uruguay",
    countryFlag: "🇺🇾",
    currency: "UYU",
  },
  {
    id: 7,
    name: "Mexico",
    countryFlag: "🇲🇽",
    currency: "MXN",
  },
];

const customerArg = {
  firstName: "Ari",
  lastName: "Diaz",
  email: "ari@gmail.com",
  phone: {
    countryCode: "54",
    areaCode: "3624",
    phoneNumber: "161124",
  },
  personalId: {
    type: "DNI",
    value: "44982818",
  },
  taxId: {
    type: "DNI",
    value: "44982818",
  },
  address: {
    street: "El Salvador",
    number: "5218",
    city: "CABA",
    state: "Buenos Aires",
    zipCode: "C32",
    country: "AR",
    description: "",
  },
};
const brazilCustomer = {
  firstName: "Nahuel",
  lastName: "Candia",
  email: "nahue@rebill.com",
  personalId: {
    type: "CPF",
    value: "08333762921",
  },
  phone: {
    countryCode: "54",
    areaCode: "",
    phoneNumber: "3517668346",
  },
  address: {
    country: "BR",
    street: "R. Heitor Baggio Vidal",
    number: "125",
    zipCode: "82840010",
    city: "Montes Claros",
    state: "Minas Gerais",
  },
};

const chileCustomer = {
  firstName: "Fran",
  lastName: "Paganucci",
  email: "fran@gmail.com",
  phone: {
    countryCode: "56",
    areaCode: "2",
    phoneNumber: "21234567",
  },
  personalId: {
    type: "RUT",
    value: "12.345.678-9",
  },
  address: {
    street: "Avenida Providencia",
    number: "1234",
    city: "Caldera",
    state: "Atacama",
    zipCode: "7500000",
    country: "CL",
  },
};
const peruCustomer = {
  firstName: "Tony",
  lastName: "Cueva",
  email: "tony@gmail.com",
  phone: {
    countryCode: "51",
    areaCode: "",
    phoneNumber: "1013150800",
  },
  personalId: {
    type: "DNI",
    value: "12131415",
  },
  address: {
    street: "Avenida Lima",
    number: "1234",
    city: "Cusco",
    state: "Cusco",
    zipCode: "00800",
    country: "PE",
  },
};
const colombiaCustomer = {
  firstName: "Hen",
  lastName: "Rangel",
  email: "hen@gmail.com",
  phone: {
    countryCode: "57",
    areaCode: "",
    phoneNumber: "6012205249",
  },
  personalId: {
    type: "CC",
    value: "1053795396",
  },
  address: {
    street: "Avenida Bolivar",
    number: "1234",
    city: "Bolivar",
    state: "Bolivar",
    zipCode: "00800",
    country: "BO",
  },
};
const uruguayCustomer = {
  firstName: "Vir",
  lastName: "Espeche",
  email: "vir@gmail.com",
  phone: {
    countryCode: "598",
    areaCode: "",
    phoneNumber: "092870425",
  },
  personalId: {
    type: "CI",
    value: "12345672",
  },
  address: {
    street: "Avenida Bolivar",
    number: "1234",
    city: "Colonia",
    state: "Colonia",
    zipCode: "70000",
    country: "UY",
  },
};
const mexicoCustomer = {
  firstName: "Marian",
  lastName: "Mitelman",
  email: "marian@gmail.com",
  phone: {
    countryCode: "52",
    areaCode: "",
    phoneNumber: "5261327677",
  },
  personalId: {
    type: "ID",
    value: "MAAR790213HMNRLF03",
  },
  address: {
    street: "Avenida Bolivar",
    number: "1234",
    city: "Mexico",
    state: "Mexico",
    zipCode: "16900",
    country: "MX",
  },
};

export const customerMap: CustomerMap = {
  ARS: customerArg,
  BRL: brazilCustomer,
  CLP: chileCustomer,
  PEN: peruCustomer,
  COP: colombiaCustomer,
  UYU: uruguayCustomer,
  MXN: mexicoCustomer,
};
