"use client";

import { IconType } from "react-icons";
import * as Icons from "react-icons/fa6";

type TFaIconProps = {
    name: string;
};

type TIconIndex = {
    [index: string]: IconType;
};

export default function FaIcon({ name }: TFaIconProps) {
    const IconDictionary = Icons as TIconIndex;
    const IconComponent = IconDictionary[name];

    if (!IconComponent) {
        throw new Error(`The icon ${name} was not found in react-icons`);
    }

    return <IconComponent />;
}
