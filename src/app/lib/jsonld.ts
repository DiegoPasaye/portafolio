export function serializeJsonLd(data: unknown) {
  const serialized = JSON.stringify(data)

  if (serialized === undefined) throw new Error('JSON-LD debe ser serializable')

  return serialized.replace(/</g, '\\u003c')
}
