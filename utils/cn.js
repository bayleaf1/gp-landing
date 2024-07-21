import clsx from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...classes){
    return twMerge(clsx(classes))
}