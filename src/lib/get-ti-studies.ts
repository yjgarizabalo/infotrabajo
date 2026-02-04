import { getDictionary } from "@lib/query"

export const getStudies = async () => {
  return getDictionary('study')
}