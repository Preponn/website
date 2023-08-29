<template>
	<main>
		<div class="container-fluid banner">
			<div class="container h-100 py-4">
				<div class="row align-items-center h-100">
					<div class="col text-white align-self-center">
						<div class="lead">Get your exam scores improved</div>
						<div class="display-1 fw-bold">Preponn<sup>&copy;</sup></div>
						<a @click="this.scrollToCourses" class="btn btn-outline-light rounded-5 mt-3 justify-self-center">Explore Courses</a>
					</div>
					<div class="col ps-4 py-4 rounded-4 shadow d-none align-self-center d-md-block" style="backdrop-filter:blur(7px) brightness(60%)" :class="{'rounded-bottom-0' : searchbox.length>0}">
						<div class="lead mb-4 text-warning">Find your exam</div>
						<p class="text-white mb-4 fs-2">
							Find your way to greater scores.
						</p>
						<div class="d-flex">
							<div class="">
								<input id="search" v-model="this.searchbox" type="text" class="input-form fs-4 px-3" placeholder="Your exam name"/>
							</div>
							<div class="position-absolute bg-white w-100" style="top:100%;left:0;box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);" v-show="searchbox.length>0">
								<ul class="list-group">
									<li v-for="(c,i) in this.filteredCourses" :key="i" class="list-group-item d-flex">
										<NuxtLink :to="c.link" class="text-decoration-none w-100 text-black">{{c.name}}</NuxtLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container" id="courseDiv">
			<div class="row justify-content-center align-items-start mt-4">
				<h4 class="text-muted text-center my-4">Visit course pages to <span class="text-black">get started !</span></h4>
				<div v-for="(c,i) in this.courses" :key="i" class="col-12 col-md-6 col-lg-3 p-1 my-md-5" >
					<div class="rounded pb-1 border" style="min-height: 200px;">
						<h3 class="fw-normal fs-5 pb-1 p-2 text-black shadow-sm" style="border-bottom:2px dotted #EA8825;background-color: #FFCB60;">{{c.title}}</h3>
						<ul class="mt-3">
							<li v-for="(t,i) in c.tests" :key="i" class="my-1 course-link"><router-link :to="`${t.link}`" class="text-decoration-none p-1 text-black">{{t.name}}</router-link></li>
						</ul>
					</div>
				</div>
			</div>	
		</div>

		
		<div class="container-fluid w-100 pon-blue-bg text-white mt-3 my-md-5">
			<div class="row justify-content-center g-3">
				<div class="col-12 p-5 ad-box my-2 text-center col-md-6">
					<h3 class="fw-bold">High acceptance rate</h3>
					<p> With our expertise and diverse collective experiences, we take responsibility for each of the students who trust us.</p>
					<a href="#testimonials" class="pon-clr text-decoration-none">Testimonials ></a>
				</div>
				<div class="col-12 p-5 ad-box my-2 text-center col-md-6">
					<h3 class="fw-bold">Experienced Trainers</h3>
					<p>Our experienced mentors facilitate Preponn- exclusive pedagogies for every question-type in your opted test !</p>
					<a href="/about#faculty" class="pon-clr text-decoration-none">Meet our trainers ></a>
				</div>
				<div class="col-12 p-5 ad-box my-2 text-center col-md-6">
					<h3 class="fw-bold">You-centric pedagogy</h3>
					<p> We understand that each student is different. Consequently, we are proud developers of an exclusive pedagogy that is you-centric.</p>
				</div>
				
				<div class="col-12 p-5 ad-box my-2 text-center col-md-6">
					<h3 class="fw-bold">The best you deserve</h3>
					<p>We believe in your dreams and we know that together, we can achieve them all !</p>
				</div>
			</div>
		</div>

		<div class="container mt-3 mt-4">
			<div class="row justify-content-center align-items-center">
				<div class="col-12 col-sm-6 col-md-6 col-lg-6 position-relative mb-2 mb-md-0" v-for="(h,i) in highlights" :key="i">
					<div class="p-4 rounded-3 text-center text-white h-course" :style="{backgroundImage: `url(/img/${h.img})`, backgroundSize: 'cover'}">
						<div class="position-absolute m-auto rounded-3" style="backdrop-filter:brightness(50%);z-index:-1;top:0;bottom: 0;right:0;left:0;"></div>
						<h3 class="fw-bold">{{h.heading}}</h3>
						<p class="lead">{{h.tag}}</p>
						<a :href="`${h.link[0]}`" class="btn btn-info fw-bold rounded-4">{{h.link[1]}}</a>
					</div>
				</div>
			</div>	
		</div>



		<!-- <div class="mt-3 w-100 bg-dark text-white py-3" :if="this.offer">
			<div class="container text-center">
			<h3 class="fw-bold fs-2">{{offer.title}}</h3>
			<p class="fs-4 lead">
				{{offer.detail}}
			</p>
			<a :href="`${offer.link[0]}`" class="btn btn-outline-light rounded-5 w-25">{{offer.link[1]}}</a>
			</div>
		</div> -->

		<div id="testimonials" class="w-100 d-flex p-0 p-md-4 mt-5 align-items-center">
			<div class="container">
				<div class="row mt-4 pt-1 pt-md-4 text-center text-white">
					<div class="col-12 col-sm-12 pt-2">
						<h3 class="fw-bold">Student Testimonials</h3>
						<p class="fs-5">What our students say about us ! </p>
					</div>
				</div>
				<div class="row mb-5">
					<div id="testimonials-in" class="carousel slide" data-bs-ride="true">
						<div class="carousel-indicators" style="bottom:-2.5rem">
							<button type="button" v-for="(t,i) of testimonials.length+1" :key="i" data-bs-target="#testimonials-in" :class="{active : i==0}" :data-bs-slide-to="i" :aria-label="`slide-${i}`"></button>
						</div>
						<div class="carousel-inner px-5" role="listbox">
							<div v-for="(t,i) in testimonials" :key="i" class="carousel-item " :class="{active: i==0}">
								<div class="row">
									<div class="col-1 d-none d-sm-block"></div>
									<div class="col-12 col-sm-10 text-center shadow bg-light py-5" style="min-height:20rem">
										<div class="d-flex justify-content-between align-items-center px-5 mb-2">
											<h3 class="p-0 m-0">{{t.name}}</h3>
											<img :src="`/img/${t.img}`" alt="" height="60" width="55">
										</div>
										<p class="text-muted fst-italic px-4" v-html="t.says.substring(0,1000) + (t.says.length>1000 ? '...' : '' )"></p>
									</div>
									<div class="col-1 d-none d-sm-block"></div>
								</div>
							</div>
							<div class="carousel-item">
								<div class="row">
									<div class="col-1 d-none d-sm-block"></div>
									<div class="col-12 col-sm-10 text-center shadow bg-light py-5" style="min-height:20rem">
										<h4 class="text-muted">Video Testimonials</h4>
										<div class="row justify-content-center align-items-center h-100">
											<div class="col-10 col-sm-5">
												<h3>Nandini</h3>
												<iframe width="100%" height="100%" src="https://drive.google.com/file/d/1MSiWx8sIi83gcYkq9KWn7JxiJEQkM1lb/preview"></iframe>
													<!-- <a href="https://drive.google.com/file/d/1B5hpH8nT-CFWeUi4r7hijeHPs8uT4_tD/view?usp=sharing" class="text-decoration-none text-warning">Watch Video</a> -->
											</div>
											<div class="col-10 col-sm-5">
												<h3>Brennan James</h3>
												<iframe width="100%" height="100%" src="https://drive.google.com/file/d/1B5hpH8nT-CFWeUi4r7hijeHPs8uT4_tD/preview"></iframe>
												<!-- <a href="https://drive.google.com/file/d/1MSiWx8sIi83gcYkq9KWn7JxiJEQkM1lb/view?usp=sharing" class="text-decoration-none text-warning">Watch Video</a> -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#testimonials-in" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#testimonials-in" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container mt-5">
			<p class="border border-dark text-center py-3 px-1"> We would love to here from you ! <a class="fw-bold text-black text-decoration-underline text-nowrap" href="/contact">Contact Us</a></p>	
		</div>
		<button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#popup" ref="popup"></button>
		<div class="modal fade" tabindex="-1" id="popup" aria-labelledby="Popup"  aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body w-100 h-100">
						<img class="img-fluid" src="/img/popup.jpeg"/>
					</div>
				</div>
			</div>
  		</div>

	</main>
</template>

<script>
export default {
  data(){
		return({
			searchbox : "",
			courses : [
				{
					title: "High School Exams",
					tests: [
						{name: "AP" , link: "/course/ap"},
						{name: "Pre Calculus" , link: "/course/pre-calculus"},
						{name: "SSAT" , link: "/course/ssat"}
					]
				},
				{
					title : "College Entrance",
					tests : [
						{name: "PSAT" , link: "/course/psat"},
						{name: "ACT" , link: "/course/act"},
						{name: "SAT" , link: "/course/sat"}
					]
				},
				{
					title : "Math Olympiad",
					tests : [
						{name: "AMC 8" , link: "/course/amc-8"},
						{name: "AMC 10" , link: "/course/amc-10"},
						{name: "AMC 12" , link: "/course/amc-12"},
						{name: "AIME" , link: "/course/aime"}
					]
				},
				{
					title : "Graduate School Test",
					tests : [
						{name: "GRE" , link: "/course/gre"},
						{name: "GMAT" , link: "/course/gmat"}
					]
				},

			],
			offer: {
				title: "A special offer for you",
				detail: "Offer details",
				link: ["#", "Link title"]
			},
			highlights : [
				{
					heading: "SAT Batch",
					tag: "LiveOnline",
					link: ["/sat", "Enroll Now"],
					img : 'books.jpg'
				},
				{
					heading: "SAT One-on-one",
					tag: "LiveOnline",
					link: ["/sat", "Enroll Now"],
					img : 'library.jpg'
				},
			],
			testimonials: [
				{
					"name": "Jay Jagani",
					"says": "My name is Jay Jagani, and I am currently a junior in high school. I have been learning math from Preponn Education for about one year. With the help of my teacher, Digvijay Singh, I finished the entire AB calculus curriculum the summer before junior year, and because of that I have <span class='tmh'>96% in BC Calculus</span> . Additionally, I scored a <span class='tmh'>1560 on my SAT</span> with a perfect <span class='tmh'>800 on my SAT math</span> section on my first try on August 29th. I believe Preponn is a great service for all kinds of academic help and test prep because it is so convenient and offers top level quality with reasonable prices. Additionally, my teacher is very knowledgeable, and has not yet failed to clarify or explain concepts I am struggling with. Every difficult concept is explained so thoroughly and every question is answered so well that it makes the subject seem almost simple. The voices of instructors are very clear and easy to understand, and technical problems are rarely an issue. Lastly, extra practice is always given, and instructors will answer any questions you may have even outside of class time. Therefore, I believe that Preponn is one of the <span class='tmh'>best virtual education</span> and tutoring services available right now.",
					"img" : "testimonials/r1.png"
				},
				{
					"name": "Brennan James",
					"says": "Digvijay was a great help to me in preparing for the SATs. He assigned me practice tests as homework and then we would review problems I didn't get correct in our tutoring sessions. In the beginning, I was scoring in the mid 1200s, and he helped me bring my <span class='tmh'>1540</span> final score up to a , with a perfect score in <span class='tmh'>math (800)</span> on both my <span class='tmh'>SAT</span> attempts.",
					"img" : "testimonials/r2.png"
				},
				{
					"name": "Sahitya Suresh",
					"says": "Overall, the SAT prep classes I took with Mr. Digvijay and Payel were extremely helpful. The reading and writing classes I had with Payel helped me a lot because they were very personalised and suited towards my weak areas. My math classes with Mr. Digvijay were also <span class='tmh'>personalised</span> to work on the concepts I was weaker on. With the help of Mr. Digvijay and his team, I was able to score a <span class='tmh'>perfect on math</span> and <span class='tmh'>close to perfect on the reading and writing</span> section.\nThese classes were immensely helpful for me and I highly recommend them to anyone that is preparing for the SAT.",
					"img" : "testimonials/r3.jpeg"
				},
				{
					"name": "Kavni",
					"says": "With the help of Digvijay Sir, I improved my <span class='tmh'>SAT</span> score by 80 points, achieving a score <span class='tmh'>above a 1500</span>. He taught me with a positive attitude, guiding me through the areas where I needed help and helped me feel confident when I took the test. He also helped me through ap calculus ab and bc, teaching me lessons and helping me with the concepts I couldn't grasp. With his help, I was also able to achieve a <span class='tmh'>5 on the AP exam</span>.",
					"img" : "testimonials/r4.jpeg"
				},
				{
					"name": "Ronak Kanodia",
					"says": "It is natural to be skeptical about whether a tutor will really help you, especially in subject such as math, which seem to be something solely derived from pure logic. As a senior hoping to take my math score to the next level, this was something that I struggled with, yet through the advice of a few of my friends, I discovered Digvijay Sir / Preponn. Through their simple yet effective style of teaching, they allowed me to grow my skills in the realm of math. The entire structure of the course was personalized for me, and this allowed me to move at a pace perfect for me. Through the classes here, I felt confident enough to retake the SAT and ended up scoring <span class='tmh'>a perfect score in math for the composite total of 1590!</span>",
					"img" : "testimonials/r7.jpeg"
				},
				{
					"name": "Riya Chaturvaedi",
					"says": "Hello! I am Riya Chaturvedi. I had been associated with Preponn Education Pvt ltd for a couple of months. I took English and math classes for SAT exam. Digvijay sir is a proficient mentor and a great guide. He helped me a lot in clearing my concepts and doubts. Even the English tutor was also good at teaching. As a result, I <span class='tmh'>scored 1330 out of 1600 on the SAT exam</span> held on 17 September 2022. I am grateful to tell you I <span class='tmh'>received admission acceptance letters from the University of Texas Arlington, the University of Central Florida, and the University South Alabama</span>. I would highly recommend Preponn Pvt ltd as it is a very efficient, reasonable ,and productive agency, which will not only help in strengthening the concepts but also prepare you for a better score and grade.",
					"img" : "testimonials/r8.jpeg"
				},
				{
					"name": "Prashant Kumar",
					"says": "Thanks to Digvijay sir's guidance, I managed to get <span class='tmh'>50 in my quants</span>. Throughout my GMAT journey his strategic planning and experience played a major role in fulfilling all the gaps that I had in my quants section. Without his efforts I wouldn't have been able to get <span class='tmh'>740 in my GMAT</span>. Finally I'm also elated to share that I have <span class='tmh'>received my admit for PGP 2022-23 at ISB Hyderabad.</span>",
					"img" : "testimonials/r9.jpeg"
				}
        	]
		})
	},
	methods: {
		scrollToCourses() {
			const el = document.querySelector("#courseDiv")

			if (el) {
			el.scrollIntoView({behavior: 'smooth'});
			}
		}
	},
	computed: {
		filteredCourses(){
			let out = []
			for(let c of this.courses){
				for(let t of c.tests){
					if(t.name.toLowerCase().includes(this.searchbox.toLowerCase())){
						out.push(t)
					}
				}
			}
			return out
		}
	},
	mounted(){
		this.$refs.popup.click()
	}
}
</script>


<style scoped>
#testimonials{
	background-image: url('~/assets/mit.jpg'); 
	background-size: "cover"
}
.container-fluid.banner{
	background-image : url('~/assets/4243.jpg');
	height: 20rem;
	background-position: 50% 50%;
	background-size: cover;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(255, 255, 255);
  /* color : yellow; */
  opacity: 0.5; /* Firefox */
}

/* Stands for TestiMonials Highlights */
.tmh{
  color: #ea8825;
  font-size: 115%;
  font-weight: bold;
}

.course-link a:hover{
	background-color: #2c3e50;
	color:white !important
}

.course-link a{
	transition: 0.1s linear;
}

.ad-box h3{
  transition: 0.1s linear;
}

.ad-box:hover h3{
  color: #ea8825;
}


</style>