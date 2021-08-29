export async function getIPAddressesRequest(hostname) {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/api/v1/ip-addresses?" + new URLSearchParams({ hostname })
  );
  return await response.json();
}
