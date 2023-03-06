import { createTheme } from '@material-ui/core/styles'


const green = "#40513B"
const lightGreen = "#609966"
const xLightGreen = "#9DC08B"
const offWhite = "#EDF1D6"
const peach = "rgba(255, 123, 84, 0.7)"
const yellow = "rgba(255, 213, 111, 0.8)"
const grey = "rgba(0, 7, 1, 0.7)"
const lightGrey = "rgba(173, 170, 170, 1)"
const darkRed = "rgba(63, 2, 2, 0.7)"
const red = "rgba(186, 12, 12, 1)"
const gradient= `repeating-radial-gradient( circle 263px at 30.2% 3%,  #285430 31.1%, rgba(205,181,93,1) 16.4%, rgba(244,102,90,1) 50.9%, rgba(199,206,187,1) 48.7%, rgba(249,140,69,1) 62.5%, #285430 72.6% )`
const gradientSecond= `radial-gradient(circle, rgba(53,164,66,1) 0%, rgba(54,88,64,1) 100%)`
const gradientThird = 'radial-gradient(circle, rgba(205,146,241,1) 0%, rgba(164,89,209,1) 100%)'

const theme = createTheme({
    palette: {
        primary: {
            main: green,
        },
        secondary: {
            main: peach
        },
        error: {
            main: red
        },
        common: {
           gradient,
           darkRed,
           lightGrey,
           lightGreen,
           grey,
           yellow,
           gradientSecond,
           xLightGreen,
           offWhite,
           gradientThird
        }
    },
    typography: {
        h1: {
            fontSize : "4.5rem",
            fontFamily: "'Climate Crisis', cursive;",
            fontStyle: "italic",
            fontWeight: 700,
            color: green,
        },
        h2: {
            fontFamily:  "'Climate Crisis', cursive;",
            fontSize: "3rem",
            fontWeight: 600,
            color: offWhite
           },
        h3: {
            fontFamily: "Rufina",
            fontSize: "2rem",
            fontWeight: 300,
            color: yellow, 
        },
        h4: {
            fontFamily: "Rufina",
            fontWeight: 700,
            fontSize: "2rem",
            color: lightGreen
        },
        h5: {
             fontFamily: "Rufina",
             fontSize: "1.5rem",
             fontWeight: 700,
             fontStyle: "italic",
             color: "#ffffff"
        },
        body: {
            fontFamily: "Rufina",
            fontSize: "3rem",
            color: grey,
           },
           body2: {
            fontFamily: "Rufina",
            fontSize: "2rem",
            color: grey,
           }
        
         },
         overrides: {
        
         }
    }
)

export default theme