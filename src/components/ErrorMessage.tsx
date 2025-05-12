import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="bg-red-600 font-bold text-white text-sm text-center uppercase p-2">{children}</p>;
};

export default ErrorMessage;
