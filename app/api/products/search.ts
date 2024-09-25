// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../../lib/db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const { query } = req.query;

//     try {
//       const products = await prisma.product.findMany({
//         where: {
//           name: {
//             contains: query as string,
//             mode: 'insensitive',
//           },
//         },
//         include: {
//           vendors: true,
//         },
//       });

//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to search products' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }



// import { NextResponse } from "next/server";
// import db from '@/lib/db';

// export async function POST(request: any) {
//   try {
//     const { query } = await request.json();
//     const products = await db.product.findMany({
//       where: {
//         OR: [
//           { title: { contains: query, mode: 'insensitive' } },
//           { description: { contains: query, mode: 'insensitive' } },
//         ],
//       },
//       include: {
//         vendors: {
//           include: {
//             location: true,
//           },
//         },
//       },
//     });
//     return NextResponse.json(products);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({
//       message: "Failed to fetch products",
//       error,
//     }, { status: 500 });
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query } = req.body;

    try {
      const products = await prisma.product.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        include: {
          vendors: {
            include: {
              location: true,
            },
          },
        },
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to search products' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}