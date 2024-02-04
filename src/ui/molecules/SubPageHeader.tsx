import { ReturnButton } from "../atoms/Common";

type TSubPageHeaderProps = {
    title: string;
};

export default function SubPageHeader({ title }: TSubPageHeaderProps) {
    return (
        <header className="flex w-full flex-col gap-6 p-6 sm:p-12">
            <ReturnButton />
            <h2 className="text-7xl font-semibold">{title}</h2>
            <hr />
        </header>
    );
}
