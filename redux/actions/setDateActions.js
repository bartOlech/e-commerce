//Action Types
export const SELECT_DATE = "SELECT_DATE";

export const setDate = (val) => ({
    type: SELECT_DATE,
    payload: {
        date: val
    }
});