import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import cn from "@/utils/cn";

interface IDefaultFieldProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
  name: Path<T>;
  label: string;
  placeholder: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  type?: string;
  isError: boolean;
  size: "large" | "slim" | "mobile";
}

export function DefaultField<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  onInput,
  className,
  type,
  isError,
  size,
}: IDefaultFieldProps<T>) {
  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className={cn(
                  fieldState.error && "border-2 border-red-500",
                  "rounded-none border-none bg-black",
                  {
                    "flex h-[209px] lg:h-[112px] xl:h-[142px] 2xl:h-[168px] 3xl:h-[209px]":
                      size === "large",
                    "h-[53px]": size === "slim",
                    "mb-[26px] h-[53px] w-[345px]": size === "mobile",
                  },
                  className,
                )}
                icon={false}
                onInput={onInput}
                type={type}
              />
            </FormControl>
            <FormMessage>{isError && fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
}
