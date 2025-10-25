export interface Theme {
    name: string,
    colors: {
        backgroundPrimary: string,
        backgroundSecondary: string
    }
}

export interface Themes{
    [kye: string]: Theme
}