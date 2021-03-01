export const TitleChanged = "Title Changed";
export const titleChanged = (title) => ({
    type: TitleChanged,
    payload: {
        title
    }
})