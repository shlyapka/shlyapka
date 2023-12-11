let green = document.querySelector('.Green')
let blue = document.querySelector('.Blue')
let anime = document.querySelector('.Anime')
let purple = document.querySelector('.Purple')


const Theme = localStorage.getItem('currentTheme');
updateUI();

function updateUI(){
	if (Theme == "green") {
		document.body.style.setProperty("--accent", "#35823E")
		document.body.style.setProperty("--time", "#35823E")
		document.body.style.setProperty("--anim", "none")
		document.body.style.setProperty("--timebg", "white")
		document.body.style.setProperty("--bg", "url(images/greenbg.png)")
		document.body.style.setProperty("--hover", "#35823E")
	}
	else if (Theme == "blue") {
		document.body.style.setProperty("--accent", "#2F386F")
		document.body.style.setProperty("--time", "#2F386F")
		document.body.style.setProperty("--anim", "none")
		document.body.style.setProperty("--timebg", "white")
		document.body.style.setProperty("--bg", "url(images/bluebg.jpg)")
		document.body.style.setProperty("--hover", "#2F386F")
	}
	else if (Theme == "anime") {
		document.body.style.setProperty("--accent", "#FFEB6A")
		document.body.style.setProperty("--time", "#FFEB6A")
		document.body.style.setProperty("--anim", "none")
		document.body.style.setProperty("--timebg", "white")
		document.body.style.setProperty("--bg", "url(images/yellowbg.jpg)")
		document.body.style.setProperty("--hover", "#FFEB6A")
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
