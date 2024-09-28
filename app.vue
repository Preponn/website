<template>
	<HeaderComp />
	<NuxtPage />
	<FooterComp />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

body {
	font-family: 'Lato', sans-serif;
}


nav a {
	font-weight: bold;
	color: #2c3e50;
}

/* nav a.NuxtLink-exact-active {
  color: #42b983;
} */

::placeholder {
	/* Chrome, Firefox, Opera, Safari 10.1+ */
	color: rgb(255, 255, 255);
	/* color : yellow; */
	opacity: 0.5;
	/* Firefox */
}

.course-link a:hover {
	background-color: #2c3e50;
	color: white !important
}

.course-link a {
	transition: 0.1s linear;
}

.footer-link:hover {
	background-color: #2c3e50;
	color: white !important
}

.footer-link-head:hover {
	color: rgba(44, 62, 80, 1);
	/* border-radius: 15px; */
}


.footer-link,
.footer-link-head {
	color: black;
	transition: 0.1s linear;
}

.h-course {
	backdrop-filter: blur(10px);

}

#search {
	background-color: #fff0;
	border: 0;
	border-bottom: 1px solid white;
	color: white
}

#search:focus-visible {
	outline: 0;
}


.nav-link {
	transition: 0.2s ease-out;
}

.nav-link:hover {
	background-color: antiquewhite;
	border-radius: 12px;
}

.display-1 {
	font-size: 5vw;
}

.pon-clr {
	color: #ea8825 !important;
}

.pon-bg {
	background-color: #ea8825 !important;
}

.pon-blue {
	color: #486b8f !important;
}

.pon-blue-bg {
	background-color: #2c3e50 !important;
}

.pon-btn {
	background-color: #ea8825 !important;
	color: white !important;
}

.pon-btn:hover {
	background-color: #ff9c4a !important;
	color: white !important;
	box-shadow: 0 0 10px #ff9c4a !important;

}
</style>