import axios from "axios";
import getPersonalLinks from "./getPersonalLinks";

jest.mock('axios');

test('Deve ser capaz de extrair os links do arquivo', async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce({
    data: `
    ### Where you can reach me
    <p>
      <a href="https://linkedin.com/in/nascjoao"><img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white&color=0073B1"></a>
      <a href="https://dev.to/joaonasc"><img src="https://img.shields.io/badge/DEV.to-blue?logo=dev.to&logoColor=white&color=black"></a>
      <a href="mailto:oi@joaonasc.dev"><img src="https://img.shields.io/badge/Email-oi@joaonasc.dev-white"></a>
    </p>

    ### Links
    - Instagram: https://instagram.com/nasc.dev
    - LinkedIn: https://linkedin.com/in/nascjoao
    - YouTube: https://youtube.com/nascjoao
    - GitHub: https://github.com/nascjoao
    `
  })
  expect(await getPersonalLinks()).toEqual([
    {
      title: "Instagram",
      url: "https://instagram.com/nasc.dev"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/nascjoao"
    },
    {
      title: "YouTube",
      url: "https://youtube.com/nascjoao"
    },
    {
      title: "GitHub",
      url: "https://github.com/nascjoao"
    },
  ])
})
