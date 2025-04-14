import { cn } from "@/lib/utils";
import React from "react";

const NoDataMessage = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return <p className={cn("text-center text-foreground", className)}>{label}</p>;
};

export default NoDataMessage;
