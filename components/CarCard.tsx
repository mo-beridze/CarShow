"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, model, make, drive, transmission } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="w-full relative my-3 h-40 object-contain">
        <Image src="/hero.png" alt="Car model" fill priority className="object-contain" />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible text-gray w-full justify-between">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
