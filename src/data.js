// Older Projects
import predictorApp from "./assets/Other-Projects/predictor-app.png";
import countriesApp from "./assets/Other-Projects/countries-app.png";
import quizApp from "./assets/Other-Projects/quiz-app.png";
import triviaApp from "./assets/Other-Projects/trivia-app.png";
import movieApp from "./assets/Other-Projects/tv-app.png";
import staticSites from "./assets/Other-Projects/static-sites.png";
// Risk Register
import riskRegister1 from "./assets/Risk-Register/latest1.png";
import riskRegister2 from "./assets/Risk-Register/latest2.png";
import riskRegister3 from "./assets/Risk-Register/latest3.jpg";
// Happy Holidays
import happyHolidays1 from "./assets/Happy-Holidays/login-1.png";
import happyHolidays2 from "./assets/Happy-Holidays/home-2.png";
import happyHolidays3 from "./assets/Happy-Holidays/calender-3.png";
import happyHolidays4 from "./assets/Happy-Holidays/friends-4.png";
import happyHolidays5 from "./assets/Happy-Holidays/user-5.png";
import happyHolidays6 from "./assets/Happy-Holidays/friend-6.png";
import happyHolidays7 from "./assets/Happy-Holidays/events-7.png";
import happyHolidays8 from "./assets/Happy-Holidays/dark-8.png";
// MandemZMad Quiz
import mandemQuiz1 from "./assets/MandemZMadQuiz/home-1.png";
import mandemQuiz2 from "./assets/MandemZMadQuiz/create-2.png";
import mandemQuiz3 from "./assets/MandemZMadQuiz/join-3.png";
import mandemQuiz4 from "./assets/MandemZMadQuiz/wait-4.png";
import mandemQuiz5 from "./assets/MandemZMadQuiz/quiz-5.png";
import mandemQuiz6 from "./assets/MandemZMadQuiz/correct-6.png";
import mandemQuiz7 from "./assets/MandemZMadQuiz/wrong-7.png";
import mandemQuiz8 from "./assets/MandemZMadQuiz/results-8.png";
import mandemQuiz9 from "./assets/MandemZMadQuiz/leaderboards-9.png";
// Monastery
import monastery1 from "./assets/Monastery/login-1.png";
import monastery2 from "./assets/Monastery/wrong-2.png";
import monastery3 from "./assets/Monastery/home-3.png";
import monastery4 from "./assets/Monastery/add-4.png";
import monastery5 from "./assets/Monastery/leaderboards-5.png";
// Mouse-Tails
import mouseTails1 from "./assets/Mouse-Tails/home-1.png";
import mouseTails2 from "./assets/Mouse-Tails/tales-2.png";
import mouseTails3 from "./assets/Mouse-Tails/light-3.png";
import mouseTails4 from "./assets/Mouse-Tails/light-4.png";
// Tidy-Url
import tidyUrl1 from "./assets/Tidy-Url/home-1.png";
import tidyUrl2 from "./assets/Tidy-Url/url-2.png";

const projectsData = [
	{
		title: "Happy Holidays",
		images: [
			happyHolidays1,
			happyHolidays2,
			happyHolidays3,
			happyHolidays4,
			happyHolidays5,
			happyHolidays6,
			happyHolidays7,
			happyHolidays8,
		],
		description:
			"Christmas themed wishlist app. Set and find what you and your frineds 'want', 'dislike' and 'dream' of to make the right purchase. Also use a price comparison to help you find the best prices and much more.",
		technologies: [
			"JavaScript/CSS/HTML",
			"Python",
			"React",
			"Axios",
			"Node",
			"Express",
			"Puppeteer",
			"Flask",
			"Flask-mail",
			"Netlify",
			"Render",
			"Cypress",
			"Jest",
			"SQLAlchemy",
		],
		solo: false,
		liveUrl: "",
		githubUrl: "https://github.com/siddav83/happy-holiday-frontend",
	},
	{
		title: "MandemZMad Quiz",
		images: [
			mandemQuiz1,
			mandemQuiz2,
			mandemQuiz3,
			mandemQuiz4,
			mandemQuiz5,
			mandemQuiz6,
			mandemQuiz7,
			mandemQuiz8,
			mandemQuiz9,
		],
		description:
			"A Multiplayer quiz, play alone opr with your friends from around the world.",
		technologies: [
			"JavaScript/CSS/SASS/HTML",
			"React",
			"Socket.io",
			"express",
			"Node",
			"Netlify",
			"Heroku",
			"Cypress",
			"Jest",
			"MongoDB",
		],
		solo: false,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/multiplayer-quiz-backend",
	},
	{
		title: "Monastery",
		images: [monastery1, monastery2, monastery3, monastery4, monastery5],
		description:
			"Monastery Designed habit tracking app to help monitor your life.",
		technologies: [
			"JavaScript/CSS/SASS/HTML",
			"Node",
			"Express",
			"Mongoose",
			"MongoDB",
			"Netlify",
			"Heroku",
		],
		solo: false,
		liveUrl: "",
		githubUrl: "",
	},

	{
		title: "Mouse Tails",
		images: [mouseTails1, mouseTails2, mouseTails3, mouseTails4],
		description:
			"Write down your secret thoughts or tails and come back to them whenever you need...",
		technologies: [
			"JavaScript/CSS/SASS/HTML",
			"Node",
			"Express",
			"Mongoose",
			"MongoDB",
			"Netlify",
			"Heroku",
		],
		solo: true,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/story-project",
	},
	{
		title: "Tidy url",
		images: [tidyUrl1, tidyUrl2],
		description:
			"Shorten your long urls to small tidy ones with the app. Made with a backend of Python & flask and a frontend of React.",
		technologies: [
			"JavaScript/CSS/SASS/HTML",
			"React",
			"Python",
			"Flask",
			"SQLAlchemy",
		],
		solo: false,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/url-shortener",
	},
	{
		title: "Risk Register",
		images: [riskRegister1, riskRegister2, riskRegister3],
		description:
			"Risk management web app using a risk register tool. Provides a dashboard with the ability to add, remove, modify risks as well as prioritize. Provides stats such as score, average probability, average impact, average risk level, total risks, high-level risks and a doughnut chart for visualization.",
		technologies: [
			"JavaScript/CSS/SASS/HTML",
			"React",
			"Axios",
			"Node",
			"Express",
			"chartJs",
		],
		solo: false,
		liveUrl: "",
		githubUrl: "https://github.com/siddav83/happy-holiday-frontend",
	},
	{
		title: "Quizzical",
		images: [quizApp],
		description: "",
		technologies: [],
		features: ["React", "HTML", "CSS", "Javascript"],
		solo: true,
		liveUrl:
			"My first app created using the React. This uses the Open Trivia Database (OTD) API.",
		githubUrl: "https://github.com/Ahmed78613/react-quiz-api-app",
	},
	{
		title: "Predictator",
		images: [predictorApp],
		description:
			"Prediction app which  uses genderize, agify and nationalize API's together to create a small prediction app. Using the users name it sends 3 separates fetch requests to retrieve the predicted data.",
		technologies: ["HTML", "CSS", "Javascript"],
		solo: true,
		liveUrl: "",
		githubUrl:
			"https://github.com/Ahmed78613/age-gender-and-nationality-prediction-app",
	},
	{
		title: "Rest Countries",
		images: [countriesApp],
		description: "Search & find stats for countries around the world!",
		technologies: ["HTML", "CSS", "Javascript"],
		features: [],
		solo: true,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/rest-countries-api-app",
	},
	{
		title: "Trivia Night",
		images: [triviaApp],
		description:
			"Trivia application created using the 'Open Trivia Database'. Allows users to choose between categories, difficulty and the number of questions then fetches the questions from the following API: https://opentdb.com/",
		technologies: [],
		features: ["HTML", "CSS", "Javascript"],
		solo: true,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/trivia-app",
	},
	{
		title: "Lights Out",
		images: [movieApp],
		description: "A Movie & tv series app created using the TMBD API.",
		technologies: ["HTML", "CSS", "Javascript"],
		features: [],
		solo: true,
		liveUrl: "",
		githubUrl: "https://github.com/Ahmed78613/movie-tv-app",
	},
	{
		title: "Some Static Sites",
		images: [staticSites],
		description:
			"Resort themed and a VR themed web landing page created using HTML, CSS and a little bit of JavaScript",
		technologies: ["HTML", "CSS", "Javascript"],
		features: [],
		solo: true,
		liveUrl: "",
		githubUrl: "",
	},
];

export default projectsData;
