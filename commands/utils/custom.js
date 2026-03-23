// Source - https://stackoverflow.com/a/10284006
// Posted by ninjagecko, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-21, License - CC BY-SA 4.0
function zip(items) {
    items = items.map(
        item => typeof item === 'string'
            ? JSON.parse(item)
            : item
    );
    const shortest = items.length === 0
        ? []
        : items.reduce(
            (a,b) => a.length<b.length
                ? a
                : b
        );

    return shortest.map(
        (_,i) => items.map(
            (array) => array[i]
        )
    );
}
function zip_longest(items) {
    items = items.map(
        item => typeof item === 'string'
            ? JSON.parse(item)
            : item
    );
    const longest = items.reduce(
        (a,b) => a.length>b.length
            ? a
            : b,
        []
    );

    return longest.map(
        (_,i) => items.map(
            (array) => array[i])
    );
}

export const custom_itertools = {
    zip: zip,
    zip_longest: zip_longest,
}
