export const formatDate = (date: Date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Los meses comienzan en 0
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};
