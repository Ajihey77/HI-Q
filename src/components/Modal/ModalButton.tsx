import RoundButton from "../RoundButton";

export default function ModalButton({
  setIsClose,
  setIsComplete,
  visibility = { cancel: "", confirm: "" },
}: {
  setIsClose?: (val: boolean) => void;
  setIsComplete?: <T>(val?: T) => void;
  visibility?: { cancel?: string; confirm?: string };
}) {
  return (
    <div className="absolute bottom-0 right-0 flex p-8 xl:gap-4 gap-2 z-30">
      <RoundButton
        bgColor={"bg-[#363535]"}
        text={"취소"}
        onClick={() => setIsClose?.(false)}
        className={`${visibility.cancel} px-5 py-2 hover:bg-[#1a1919]`}
      />
      <RoundButton
        bgColor={"bg-[var(--color-point)]"}
        text={"확인"}
        onClick={() => setIsComplete?.()}
        className={`${visibility.confirm} px-5 py-2 hover:bg-[var(--color-point-hover)]`}
      />
    </div>
  );
}
