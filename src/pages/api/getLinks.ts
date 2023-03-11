import type { NextApiRequest, NextApiResponse } from 'next';
import getPersonalLinks from '../../services/getPersonalLinks';

export default async function(req: NextApiRequest, res: NextApiResponse) {
  try {
    const links = await getPersonalLinks();
    return res.status(200).json({ data: links });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
