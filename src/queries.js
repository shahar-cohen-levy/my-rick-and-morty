import gql from 'graphql-tag'

export const CHARACTERS_QUERY = gql`
query CharactersQuery($page:Int, $filter:FilterCharacter){
    characters(page:$page, filter:$filter) {
      info {
        count
        pages
        next
        prev
            }
      results {
        id  
        name
        status
        species
        gender
        image
      }
    }
  }
`

export const SINGLE_CHARACTERS_QUERY = gql`
    query SingleCharactreQuery($id:ID) {
      character(id:$id) {
        id
        name
        status
        species
        gender
        type
        image
      }
      location(id:$id) {
        id
        name
        dimension
        created
        residents {
          name
        }
      }
    }
    `

export const SAME_GENDER_QUERY = gql`
query SameGenderQuery($gender:String){
    characters(filter:{gender:$gender}) {
      results {
        id  
        name
        status
        species
        gender
        image
      }
    }
  }
`