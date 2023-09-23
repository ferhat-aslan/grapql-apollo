import { gql } from 'apollo-angular';

export const GET_REPOSITORIES = gql`query($first:Int=10,$last:Int=10, $before:String, $after:String) { 
    search(
      type:REPOSITORY,
      query:"is:public sort:created-asc",
      first: $first
      last: $last
      before:$before
      after: $after
      
    ) {
      repos: edges{
        repo:node{
          ... on Repository {
            url,
            name,
            createdAt,
            updatedAt,
            stargazers {
              totalCount
          }
          owner {
            id
            login
            avatarUrl
          }
          }
        }
      },
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
    }
  }`;
