// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../../lib/db';
// import { getCoordinatesFromAddress } from '../../../lib/nominatim';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, phone, email, address, userId } = req.body;

//     try {
//       const coordinates = await getCoordinatesFromAddress(address);

//       const vendor = await prisma.vendor.create({
//         data: {
//           name,
//           phone,
//           email,
//           address,
//           latitude: coordinates.lat,
//           longitude: coordinates.lng,
//           userId,
//         },
//       });

//       res.status(201).json(vendor);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create vendor' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }



import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/db';
import { getCoordinatesFromAddress } from '../../../lib/nominatim';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, email, vendorAddress, userId } = req.body;

    try {
      const coordinates = await getCoordinatesFromAddress(vendorAddress);

      const location = await prisma.location.create({
        data: {
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        },
      });

      const vendor = await prisma.vendor.create({
        data: {
          name,
          phone,
          email,
          vendorAddress,
          locationId: location.id,
          userId,
        },
      });

      res.status(201).json(vendor);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create vendor' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}