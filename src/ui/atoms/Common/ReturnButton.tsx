"use client";

import { useRouter } from "next/navigation";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function ReturnButton() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="flex w-fit gap-2 text-3xl"
        >
            <BsArrowReturnLeft className="self-center" />
            Wróć
        </button>
    );
}
