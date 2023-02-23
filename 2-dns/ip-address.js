async function fecthIPAddress(domain) {
  const resp = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
    {
      headers: {
        accept: "application/dns-json",
      },
    }
  );
  const respObject = await resp.json();
  for (const record of respObject.Answer) {
    return record.data;
  }
  return null;
}

async function main() {
  const domain = "google.com";
  const ipAddress = await fecthIPAddress(domain);
  if (!ipAddress) {
    console.log("Something went wrong went fetching!");
  } else {
    console.log(`Found IP Addres for domain ${domain}: ${ipAddress}`);
  }
}

main();
