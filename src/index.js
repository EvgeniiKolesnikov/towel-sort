module.exports = function towelSort(matrix) {
    if (typeof matrix !== "object") return [];
    if (matrix.length <= 1) return [];

    return matrix
        .map((el, i) => (i % 2 === 0 ? el.join(", ") : el.reverse().join(", ")))
        .join(", ")
        .split(", ")
        .map((el) => Number(el));
};
