const createStorage = (PREFIX: string) => {
  function save(key: string, value: any, prefix = PREFIX): string | null {
    try {
      const savedValue = JSON.stringify(value)
      localStorage.setItem(`${prefix}${key}`, savedValue)
      return savedValue
    } catch (e) {
      console.error('Error in storage.save', e)
      return null
    }
  }

  function load<T extends unknown>(key: string, parse = true, prefix = PREFIX): T | null {
    try {
      const value = localStorage.getItem(`${prefix}${key}`)
      return value && parse ? JSON.parse(value) : value
    } catch (e) {
      console.error('Error in storage.load', e)
      return null
    }
  }

  function clear(key: string, prefix = PREFIX): void {
    try {
      return localStorage.removeItem(`${prefix}${key}`)
    } catch (e) {
      console.error('Error in storage.clear', e)
    }
  }

  return {
    save,
    load,
    clear,
  }
}

export const storage = createStorage('EDO-')
