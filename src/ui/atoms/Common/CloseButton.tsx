import { FaX } from "react-icons/fa6";

type TCloseButtonProps = {
    onClick: () => void;
};

export default function CloseButton({ onClick }: TCloseButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute right-4 top-4 z-10 text-3xl text-white"
        >
            <FaX />
        </button>
    );
}
