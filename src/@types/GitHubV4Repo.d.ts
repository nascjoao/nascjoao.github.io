export default interface GitHubV4Repo {
  name: string;
  url: string;
  description: string | null;
  openGraphImageUrl: string;
  stargazers: {
    totalCount: number;
  },
  homepageUrl: string | null;
}
