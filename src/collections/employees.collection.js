
export const orderByName = function orderByName(order) {
    return (a, b) => {
        let compare = a.lastName.localeCompare(b.lastName);
        if (compare === 0) {
            compare = a.firstName.localeCompare(b.firstName);
        }
        return compare;
    };
}