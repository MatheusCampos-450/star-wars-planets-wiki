export const extractId = (url: string) => Number(url.match(/\/(\d+)\/$/)?.[1]);
