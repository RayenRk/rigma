import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";
import { transform } from "next/dist/build/swc";

// {cursorState.mode === CursorMode.Chat && (
// )}

const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translateX(
  ${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
        <>
          <CursorSVG color="#000" />
          <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]">
            {cursorState.previousMessage && (
                <div>{cursorState.previousMessage}</div>
            )}
            <input />
          </div>
        </>
    </div>
  );
};

export default CursorChat;
