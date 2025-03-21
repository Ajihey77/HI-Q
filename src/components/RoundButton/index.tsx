import Image from "next/image";

export default function RoundButton({
  width,
  height,
  bgColor,
  text,
  url,
  onClick,
  className,
}: {
  width?: string;
  height?: string;
  bgColor?: string;
  text: string;
  url?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`
        flex items-center justify-center 
        rounded-[8px] md:rounded-[12px] 2xl:rounded-[12px] 
        drop-shadow-custom cursor-pointer opacity-90 hover:opacity-100
        text-white
        ${width} ${height} ${bgColor} ${className} 
      `}
      onClick={onClick}
    >
      {url ? (
        <Image
          src={url}
          alt={text}
          className="w-5 h-5 md:w-8 md:h-8 2xl:w-9 2xl:h-9"
          width={38}
          height={38}
        />
      ) : (
        text
      )}
    </button>
  );
}
