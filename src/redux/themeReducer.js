const CHANGE_THEME = "CHANGE_THEME";


let initialState = {
    currentTheme: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : localStorage.setItem("theme", "light"),
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            localStorage.setItem("theme", action.theme);
            return {...state, currentTheme: action.theme};
        }
        default: return state;
    }
}

export const setNewTheme = (theme) => ({type: CHANGE_THEME, theme});

export default themeReducer;