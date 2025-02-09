import { TextHoverBorderProps } from "../types";


export default function TextHoverBorder({txt}:TextHoverBorderProps) {
  return (
    <span className="my-2 pb-1 w-fit text-inherit relative after:absolute after:w-0 hover:after:w-full after:h-full after:border-b after:duration-300 after:border-b-blue-700 after:left-0 after:top-0">
        {txt}
    </span>
  )
}
