import { gql } from 'apollo-angular';

export const GET_REPOSITORIES = gql`
  query ($first: Int = 10, $last: Int, $before: String, $after: String) {
    search(
      type: REPOSITORY
      query: "is:public sort:stars-desc"
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      repos: edges {
        repo: node {
          ... on Repository {
            url
            name
            createdAt
            updatedAt
            stargazers {
              totalCount
            }
            issues {
              totalCount
            }
            owner {
              id
              login
              avatarUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
    }
  }
`;

export const GET_REPO_DETAILS = gql`
  query Issues(
    $owner: String!
    $name: String!
    $first: Int=10
    $last: Int
    $before: String
    $after: String
  ) {
    repository(owner: $owner, name: $name) {
      name
      watchers
      {
        totalCount
      }
      updatedAt
      stargazerCount
      shortDescriptionHTML
      pullRequests
      {
        totalCount
      }
      url
      owner {
        id
        login
        avatarUrl
        url
        repositories {
          totalCount
        }
      }
      issues(
        first: $first
        last: $last
        before: $before
        after: $after
        orderBy: { field: COMMENTS, direction: DESC }
      ) {
        totalCount
        edges {
          node {
            number
            title
            url
            closed
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
      }
    }
  }
`;
