import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
      return res.status(405).end()
    }

    try {
      
    } catch (error) {
      console.log(error);
      
    }
}