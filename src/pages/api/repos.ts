import type { NextApiRequest, NextApiResponse } from 'next';
import getPinnedRepos from '../../services/getPinnedRepos';
import getRepos from '../../services/getRepos';

const { GITHUB_PERSONAL_TOKEN } = process.env;

export default async function(req: NextApiRequest, res: NextApiResponse) {
  if (!GITHUB_PERSONAL_TOKEN) return res.status(401).json({ error: 'GitHub token is required' });
  try {
    const pinnedRepos = await getPinnedRepos(GITHUB_PERSONAL_TOKEN);
    const repos = await getRepos(GITHUB_PERSONAL_TOKEN);
    return res.status(200).json({ data: {
      all: repos,
      pinned: pinnedRepos,
    } });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
