export default interface Repo {
  name: string;
  url: string;
  description: string | null;
  openGraphImageUrl: string;
  stargazers: {
    totalCount: number;
  }
}
