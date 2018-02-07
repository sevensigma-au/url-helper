export class UrlHelper {

  public static join(baseUrl: string, addUrl: string): string {
    let processedBaseUrl = baseUrl;
    let processedAddUrl = addUrl;

    if (baseUrl.slice(-1) === '/') {
      processedBaseUrl = baseUrl.slice(0, -1); // Remove trailing slash from the base URL.
    }

    if (addUrl.slice(0, 1) === '/') {
      processedAddUrl = addUrl.slice(1); // Remove starting slash from the add URL.
    }

    return `${processedBaseUrl}/${processedAddUrl}`;
  }

  public static getServerUrl(absoluteUrl: string): string | null {
    let host: string | null = null;

    if (absoluteUrl) {
      const parts = absoluteUrl.split(/[/?#]/);
      host = parts.length >= 3 && parts[0].slice(-1) === ':' && parts[1].length === 0 ? `${parts[0]}//${parts[2]}` : null;
    }

    return host;
  }

  public static getAbsoluteUrl(serverUrl: string, url: string): string | null {
    let absoluteUrl: string | null = null;

    if (serverUrl) {
      if (url) {
        absoluteUrl = url.charAt(0) === '/' ? UrlHelper.join(serverUrl, url) : url;
      }
      else {
        absoluteUrl = serverUrl;
      }
    }

    return absoluteUrl;
  }
}
