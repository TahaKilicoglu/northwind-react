export const byCategory = function byCategoryId(categoryId) {
    return (item) => item.categoryId === categoryId;
}