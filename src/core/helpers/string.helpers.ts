// "camelCase" → "camel_case"
export const getSnakeCase = (str: string = ''): string => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2') // handle camelCase and PascalCase
    .replace(/[\s-]+/g, '_') // handle spaces and dashes
    .toLowerCase()
}

// "hello" → "Hello"
export const getFirstLetterUpperCases = (string: string = ''): string => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

// "hello-world" → "Hello World"
export const getTitleCase = (str: string = ''): string => {
  return str
    .replace(/[-_]+/g, ' ') // normalize delimiters
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // split camelCase/PascalCase
    .split(' ')
    .filter(Boolean) // remove empty words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export const isInString = (source: string = '', query: string = ''): boolean => {
  return source.toLowerCase().includes(query.trim().toLowerCase())
}
