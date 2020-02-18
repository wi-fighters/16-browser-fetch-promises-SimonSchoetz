// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
const myModal = document.querySelector("#myModal")

const wait = ms => new Promise((resolve) => setTimeout(resolve, ms))
wait(6 * 1000).then(() => myModal.style.display = "block");