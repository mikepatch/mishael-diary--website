import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnOverlayClick = (handler: (event: Event) => void) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const target = event?.target as HTMLElement;

            if (target.dataset.clickOverlay === "true") {
                handler(event);
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler]);
};
