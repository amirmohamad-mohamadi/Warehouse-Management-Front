import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
};

const InputField = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 ${
          ["email", "password", "text"].includes(type) ? "text-left ltr" : ""
        }`}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">
          {(errors[name]?.message as string) || "خطا"}
        </span>
      )}
    </div>
  );
};

export default InputField;
