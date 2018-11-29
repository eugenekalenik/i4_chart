const currentDate = new Date();

export const startDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 14}`;
export const endDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 1}`;