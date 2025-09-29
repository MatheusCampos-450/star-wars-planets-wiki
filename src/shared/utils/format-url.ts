type UrlParams = Record<string, string | number | null | undefined>;

export function formatUrl({
  baseUrl,
  path,
  params,
}: {
  path: string;
  baseUrl?: string;
  params?: UrlParams;
}): string {
  if (baseUrl) {
    const url = new URL(path, baseUrl);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== null && value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      }
    }
    return url.toString();
  }

  let relativeUrl = path;

  if (params) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== null && value !== undefined) {
        searchParams.set(key, String(value));
      }
    }
    const queryString = searchParams.toString();
    if (queryString) {
      relativeUrl += `?${queryString}`;
    }
  }

  return relativeUrl;
}
