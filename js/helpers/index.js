// Get current date 'YYYY-MM-DD'
const dateTo = () => {
  const date = new Date;
  return date.toISOString().slice(0, 10);
}


// Get date from past 'YYYY-MM-DD'
const dateFrom = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo + 1);
  return date.toISOString().slice(0, 10);
}

// Padding zero helper '01', '06' etc. view
export function pad(n) {
  return ('00' + n).substr(-2);
}

export const startDate = dateFrom(14);
export const endDate = dateTo();