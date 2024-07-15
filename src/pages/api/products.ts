import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "//live.staticflickr.com/65535/53857502070_13b584ce96_b.jpg",
  },
  {
    id: 2,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "//live.staticflickr.com/65535/53856188312_861a4d01dc_b.jpg",
  },
  {
    id: 3,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "//live.staticflickr.com/65535/53857331308_d8d3a701f6_b.jpg",
  },
  {
    id: 4,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "//live.staticflickr.com/65535/53857078161_f4331d5717_b.jpg",
  },
  {
    id: 5,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "//live.staticflickr.com/65535/53857448634_371e754e5b_b.jpg ",
  },
  {
    id: 6,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "//live.staticflickr.com/65535/53857502055_8ee13e2428_b.jpg",
  },
  {
    id: 7,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "//live.staticflickr.com/65535/53857502070_13b584ce96_b.jpg",
  },
  {
    id: 8,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "//live.staticflickr.com/65535/53856188312_861a4d01dc_b.jpg",
  },
  {
    id: 9,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "//live.staticflickr.com/65535/53857331308_d8d3a701f6_b.jpg",
  },
  {
    id: 10,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "//live.staticflickr.com/65535/53857078161_f4331d5717_b.jpg",
  },
  {
    id: 11,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "//live.staticflickr.com/65535/53857448634_371e754e5b_b.jpg",
  },
  {
    id: 12,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "//live.staticflickr.com/65535/53857502055_8ee13e2428_b.jpg",
  },
  {
    id: 13,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "//live.staticflickr.com/65535/53857502070_13b584ce96_b.jpg",
  },
  {
    id: 14,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "//live.staticflickr.com/65535/53856188312_861a4d01dc_b.jpg",
  },
  {
    id: 15,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "//live.staticflickr.com/65535/53857331308_d8d3a701f6_b.jpg",
  },
  {
    id: 16,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "//live.staticflickr.com/65535/53857078161_f4331d5717_b.jpg",
  },
  {
    id: 17,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "//live.staticflickr.com/65535/53857448634_371e754e5b_b.jpg",
  },
  {
    id: 18,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "//live.staticflickr.com/65535/53857502055_8ee13e2428_b.jpg",
  },
  {
    id: 19,
    brand: "Nike",
    description:
      "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.5,
    image:
      "//live.staticflickr.com/65535/53857502070_13b584ce96_b.jpg",
  },
  {
    id: 20,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image:
      "//live.staticflickr.com/65535/53856188312_861a4d01dc_b.jpg",
  },
  {
    id: 21,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.9,
    image:
      "//live.staticflickr.com/65535/53857331308_d8d3a701f6_b.jpg",
  },
  {
    id: 22,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.0,
    image:
      "//live.staticflickr.com/65535/53857078161_f4331d5717_b.jpg",
  },
  {
    id: 23,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "//live.staticflickr.com/65535/53857448634_371e754e5b_b.jpg",
  },
  {
    id: 24,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image:
      "//live.staticflickr.com/65535/53857502055_8ee13e2428_b.jpg",
  },
  {
    id: 25,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image:
      "//live.staticflickr.com/65535/53857448634_371e754e5b_b.jpg",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
