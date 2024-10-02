import React, { ReactElement, ReactNode } from "react";
import nodata from "../../assets/images/no-data.svg";
import Image from "next/image";
import LoadingAnimationContainer from "../ui/Loadings/LoadingAnimationContainers";

type TBaseFetchContainersProps<T> = {
  isLoading: boolean;
  data: T[] | T | undefined | null;
  error: string;
  children: ReactNode;
};

const BaseFetchContainer = <T,>({
  isLoading,
  children,
  data,
  error,
}: TBaseFetchContainersProps<T>) => {
  if (isLoading) return <LoadingAnimationContainer />;

  if (error) return <div>Error...</div>;

  if (!data || (Array.isArray(data) && data.length === 0))
    return (
      <div className="flex flex-1 gap-10 items-center justify-center">
        <Image src={nodata} alt="no data" className="w-1/4" />
        <h1 className="font-bold text-gray-500">No hay datos para mostrar</h1>
      </div>
    );

  return children;
};

export default BaseFetchContainer;
