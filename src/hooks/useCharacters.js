import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export const useCharacters = () => {
  /**
   * useQuery
   * The useQuery React hook is the primary API for executing queries
   * in an Apollo application.
   */
  const { error, loading, data } = useQuery(GET_CHARACTERS)

  return {
    error,
    loading,
    data
  }
}
