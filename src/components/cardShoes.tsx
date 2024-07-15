/* eslint-disable @next/next/no-img-element */
export interface ProductCardProps {
  id: number;
  brand: string;
  description: string;
  price: number;
  image: string;
}

export default function CardShoes(props: ProductCardProps) {
  return (
    <section className="flex flex-col w-48 gap-2 pb-5 bg-white rounded-lg cursor-pointer
    px-5 mb-10 shadow-md">
      <div className="w-full h-40">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={props.image}
          alt={props.description}
        />
      </div>
      <h4 className="font-inter font-medium">{props.brand}</h4>
      <p className="font-inter text-[#7C7A7A] truncated-text">
        {props.description}
      </p>
      <p className="font-inter font-medium">
        R${props.price.toString().replace(".", ",")}
      </p>
    </section>
  );
}