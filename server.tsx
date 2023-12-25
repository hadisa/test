/* eslint-disable import/no-anonymous-default-export */
// you can change the MIME type of a resource by setting the Content-Type header in the response of the resource.
import { NextApiRequest, NextApiResponse } from 'next'
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')
  console.log('Hello World')
  res.status(200).json({ message: 'Hello World' })
}
