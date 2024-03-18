function getEnvVar(key: string) {
  const envVar = import.meta.env[key]
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return envVar
}

export const API_URL = getEnvVar('VITE_API_URL')
