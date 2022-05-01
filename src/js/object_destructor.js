export default function destructuring({ special }) {
  if (special === undefined || !Array.isArray(special)) {
    return [];
  }

  const results = [];

  for (const el of special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = el;

    results.push({
      id,
      name,
      description,
      icon,
    });
  }

  return results;
}
