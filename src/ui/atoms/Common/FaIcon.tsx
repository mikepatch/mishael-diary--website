"use client";

import { IconType } from "react-icons";
import * as Icons from "react-icons/fa6";

type TIconIndex = {
    [index: string]: IconType;
};

type TFaIconProps = {
    name: string;
    className?: string;
};

export default function FaIcon({ name, className }: TFaIconProps) {
    const IconDictionary = Icons as TIconIndex;
    const IconComponent = IconDictionary[name];

    if (!IconComponent) {
        throw new Error(`The icon ${name} was not found in react-icons`);
    }

    return <IconComponent className={className} />;
}

FaIcon.defaultProps = {
    className: "",
};
