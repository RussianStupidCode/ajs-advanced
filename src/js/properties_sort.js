export default function orderByProps(obj, firstProperties = []) {
  let sortProperties = [];
  const uniqueProperties = new Set(firstProperties);
  for (const prop in obj) {
    if (!uniqueProperties.has(prop)) {
      sortProperties.push(prop);
    }
  }

  sortProperties.sort();
  sortProperties = [...firstProperties, ...sortProperties];

  const results = [];

  for (const prop of sortProperties) {
    if (!(prop in obj)) {
      continue;
    }

    results.push({
      key: prop,
      value: obj[prop],
    });
  }
  return results;
}
