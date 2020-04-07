//Action Types
export const SELECT_DATE = "SELECT_DATE";

export const setDate = (day, month, year) => ({
    type: SELECT_DATE,
    payload: {
        day,
        month,
        year
    }
});