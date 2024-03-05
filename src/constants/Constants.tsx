const monthsList: { label: string; key: number }[] = [
  { label: "Janvier", key: 1 },
  { label: "Fevrier", key: 2 },
  { label: "Mars", key: 3 },
  { label: "Avril", key: 4 },
  { label: "Mai", key: 5 },
  { label: "Juin", key: 6 },
  { label: "Juillet", key: 7 },
  { label: "Aout", key: 8 },
  { label: "Septembre", key: 9 },
  { label: "Octobre", key: 10 },
  { label: "Novembre", key: 11 },
  { label: "Decembre", key: 12 },
];
const monthNames: { [key: string]: string } = {
  "1": "Janvier",
  "2": "Fevrier",
  "3": "Mars",
  "4": "Avril",
  "5": "Mai",
  "6": "Juin",
  "7": "Juillet",
  "8": "Aout",
  "9": "Septembre",
  "10": "Octobre",
  "11": "Novembre",
  "12": "Decembre",
};

const yearsNames: { [key: string]: string } = {
  "1": "2020",
  "2": "2021",
  "3": "2022",
  "4": "2023",
  "5": "2024",
};

const yearsList: { label: string; key: number }[] = [
  { label: "2020", key: 1 },
  { label: "2021", key: 2 },
  { label: "2022", key: 3 },
  { label: "2023", key: 4 },
  { label: "2024", key: 5 },
];

const contratData: { title: string; date: string }[] = [
  {
    title: "Date de debut",
    date: "10/10/2021",
  },
  {
    title: "Date de fin",
    date: "Indeterminé",
  },
];

const personnelData: { title: string; title2: string }[] = [
  {
    title: "Prénom",
    title2: "Abdoulaye",
  },
  {
    title: "Nom",
    title2: "Omar",
  },
  {
    title: "Fonction",
    title2: "Analyste développeur",
  },
];

const vacationData: { title: string; amount: number }[] = [
  {
    title: "Solde N-1",
    amount: 16,
  },
  {
    title: "Solde",
    amount: 10,
  },
  {
    title: "Prix",
    amount: 20,
  },
];

const linkData: { linkName: string; iconIndex: number; isActive: boolean }[] = [
  {
    linkName: "Tableau de bord",
    iconIndex: 0,
    isActive: false,
  },
  {
    linkName: "Paie",
    iconIndex: 1,
    isActive: false,
  },
  {
    linkName: "Accompte",
    iconIndex: 2,
    isActive: false,
  },
  {
    linkName: "Absences",
    iconIndex: 3,
    isActive: true,
  },
  {
    linkName: "Notes de frais",
    iconIndex: 4,
    isActive: false,
  },
  {
    linkName: "Etablissemnt",
    iconIndex: 5,
    isActive: false,
  },
  {
    linkName: "Mes documents",
    iconIndex: 6,
    isActive: false,
  },
];

const dataVacation: {
  name: string;
  startingDate: string | Date;
  endingDate: string | Date;
  status: string;
  style: string;
}[] = [
  {
    name: "Congés payés",
    startingDate: "15/10/2023",
    endingDate: "15/12/2023",
    status: "validé",
    style: "success",
  },
  {
    name: "Congés sans solde",
    startingDate: "15/10/2023",
    endingDate: "25/10/2023",
    status: "rejeté",
    style: "error",
  },
  {
    name: "Arrêt maladie",
    startingDate: "17/02/2022",
    endingDate: "30/10/2023",
    status: "En validation",
    style: "warning",
  },
  {
    name: "Congés payés",
    startingDate: "15/10/2023",
    endingDate: "15/10/2024",
    status: "validé",
    style: "success",
  },
];

export default {
  monthsList,
  monthNames,
  yearsList,
  yearsNames,
  contratData,
  personnelData,
  vacationData,
  linkData,
  dataVacation,
};
