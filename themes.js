let green = document.querySelector('.Green')
let blue = document.querySelector('.Blue')
let anime = document.querySelector('.Anime')
let purple = document.querySelector('.Purple')

const Theme = localStorage.getItem('currentTheme');
updateUI();

function updateUI(){
	if (Theme == "green") {
		document.body.style.setProperty("--accent", "green")
	}
	else if (Theme == "blue") {
		document.body.style.setProperty("--accent", "blue")
	}
	else if (Theme == "anime") {
		document.body.style.setProperty("--accent", "gray")
	}
}

function ThemeToggle(theme, strTheme) {
	theme.addEventListener('click' ,()=>{
		localStorage.setItem("currentTheme" , strTheme)
	});
}

ThemeToggle(blue, "blue");
ThemeToggle(green, "green");
ThemeToggle(anime, "anime");
ThemeToggle(purple, "");