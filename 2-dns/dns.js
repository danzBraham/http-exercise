function getDomainNameFromURL(url) {
  const urlObj = new URL(url);
  return urlObj.hostname;
}

const mdnURL = "https://developer.mozilla.org/en-US/";
const domainName = getDomainNameFromURL(mdnURL);
console.log(`The domain name for ${mdnURL} is ${domainName}`);
