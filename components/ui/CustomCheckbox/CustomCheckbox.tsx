import { Checkbox, cn } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  item: any;
  itemTitle: string;
  value: string;
  children: ReactNode;
}

export const CustomCheckbox = ({ item, itemTitle, value, children }: Props) => {
  return (
    <Checkbox
      aria-label={item[itemTitle]}
      classNames={{
        base: cn(
          "inline-flex max-w-none w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 ",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">{children}</div>
    </Checkbox>
  );
};
