import { getIPAddressesRequest } from "../networks/addressNetwork";

const HOSTNAME_REGEX =
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

export async function getIPAddress(hostname) {
  const { status, data } = await getIPAddressesRequest(hostname);
  if (status !== "OK") throw new Error(data.hostname);

  return data.ip_addresses[0];
}

export function isHostnameValid(hostname) {
  return HOSTNAME_REGEX.test(hostname);
}
