const colorPaletteAray = document.querySelectorAll(".color-palette");
const colorArray = [
    "hsl(22, 65%, 57%)",
    "hsl(0, 0%, 6%)",
    "hsl(0, 0%, 95%)",
    "hsl(0, 0%, 98%)",
    "hsl(21, 94%, 75%)",
    "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)"
];

for(let i = 0; i < colorPaletteAray.length; i++) {
    colorPaletteAray[i].style.backgroundColor = colorArray[i];
    console.log(i);
    if(i == 5) {
        colorPaletteAray[i].style.border = "1px solid grey";
    }
}