export const getEnumValues = (_enum: any): any[] => Object.values(_enum).filter(el => isNaN(Number(el)))
