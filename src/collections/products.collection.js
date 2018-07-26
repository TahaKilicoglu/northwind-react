export const byCategoryId = function byCategoryId(categoryId) {
    return (item) => item.categoryId === categoryId;
}