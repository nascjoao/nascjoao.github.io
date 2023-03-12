import axios from "axios";

export type Link = {
  title: string,
  url: string,
}

export default async function getPersonalLinks() { 
  const { data } = await axios.get('https://raw.githubusercontent.com/nascjoao/nascjoao/main/README.md')
  let rawLinks: string | string[] = data.split('### Links')[1]
  rawLinks = rawLinks ? (rawLinks as string).split('\n').filter((row: string) => row.trim() !== '') : [];
  return rawLinks.reduce((linksArray: Link[], currentLink) => {
    const link = currentLink.trim().substring(2).split(': ')
    return [
      ...linksArray,
      {
        title: link[0],
        url: link[1]
      }
    ]
  }, [])
}
