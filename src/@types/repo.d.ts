export default interface Repo {
  name: string;
  url: string;
  description: string | null;
  imageURL: string;
  stars: number;
  homepageUrl: string | null;
}
