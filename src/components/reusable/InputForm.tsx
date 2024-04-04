import clsx from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { UseControllerProps, useController } from "react-hook-form";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  helperText?: string;
  disabled?: boolean;
  variant?: "short" | "medium" | "long" | "xlong";
}

interface IMultilineTextField
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
  helperText?: string;
}

export const TextField = ({
  label,
  variant = "long",
  ...props
}: UseControllerProps & ITextField) => {
  const { field, fieldState } = useController(props);

  return (
    <div
      className={clsx("mb-3", {
        "w-full": variant == "xlong",
        "w-[343px] md:w-[486px]": variant == "long",
        "w-[343px] md:w-[280px]": variant == "medium",
        "w-[111px] md:w-[172px]": variant == "short",
      })}
    >
      <label
        htmlFor={props.name}
        className="block font-semibold text-[#4f5662] text-sm  mb-[6px] leading-tight"
      >
        {label}
      </label>

      <input
        // field: { onChange, onBlur, value, name, ref },
        {...field}
        {...props}
        className=" inline-flex justify-start items-center px-4 py-2 text-base outline-none rounded-lg text-[#4f5662] border border-[#afa2c3]  gap-2 w-full h-12 font-normal leading-normal bg-white appearance-none disabled:opacity-50 disabled:hover:cursor-not-allowed"
      />

      <p
        className={clsx("text-xs mt-[4px]", {
          "text-[#DA1E28]": fieldState.invalid,
        })}
      >
        {fieldState.error?.message}
      </p>
      <p className="text-[#B1924E] text-xs font-normal">
        {props.helperText}
      </p>
    </div>
  );
};

// Text Area
export const MultilineTextField = ({
  label,
  ...props
}: UseControllerProps & IMultilineTextField) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="w-fit mb-3">
      <p className="block text-sm mb-[6px] capitalize">{label}</p>
      <textarea
        // field: { onChange, onBlur, value, name, ref },
        {...field}
        {...props}
        rows={5}
        className="block w-[280px] md:w-[390px] rounded-[10px] appearance-none focus:bg-white focus:outline focus:outline-[#D9D9D9] bg-[#D9D9D9] mb-6 py-2 px-4"
      ></textarea>
      <p
        className={clsx("text-xs mt-[6px]", {
          "text-[#DA1E28]": fieldState.invalid,
        })}
      >
        {fieldState.error?.message}
      </p>
    </div>
  );
};
