module.exports = {
    // this will check Typescript files
    "**/*.(ts|tsx)": () => "npm run tsc --noEmit",

    // This will lint and format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": filenames => [
        `npm run lint`,
        `npx prettier --write ${filenames.join(" ")}`,
    ],

    // this will Format MarkDown and JSON
    "**/*.(md|json)": filenames =>
        `npx prettier --write ${filenames.join(" ")}`,
};
