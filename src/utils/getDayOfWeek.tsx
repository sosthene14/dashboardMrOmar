function getDayOfWeek(year: number, month: number, day: number): string {
  const date = new Date(year, month - 1, day);
  const options: any = { weekday: "long" };
  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}

export default { getDayOfWeek };
