import type Repo from "../@types/repo";

export default async function getRepos(gitHubToken: string) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `query {
        user(login: "nascjoao") {
          repositories(first: 100, affiliations: OWNER, privacy: PUBLIC) {
            nodes {
              ... on Repository {
                name,
                url,
                description,
                openGraphImageUrl,
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }`
    }),
    headers: {
      'Authorization': `bearer ${gitHubToken}`,
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  const repos = data.data.user.repositories.nodes.map(
    ({ openGraphImageUrl, stargazers, ...repo }: Repo) => ({
      ...repo,
      imageURL: openGraphImageUrl,
      stars: stargazers.totalCount
    }),
  )
  return repos;
}
