"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleClickNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(`${newPathName}#searchbar`);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleClickNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
