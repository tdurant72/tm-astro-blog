function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

function capitalize(str: string): string {
  if (typeof str !== "string" || structuredClone.length === 0) {
    return str;
  }
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}
export { formatDate, capitalize };
