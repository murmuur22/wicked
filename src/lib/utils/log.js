import chalk from "chalk";

const styles = {
	tomato: chalk.hex("#ff6347"),
	banana: chalk.hex("#FABD30"),
};

export default {
	plain(text) {
		console.log(`${text}`);
	},
	bold(text) {
		console.log(`> ${chalk.bold(text)}`);
	},
	error(text) {
		console.log(`! ${styles.tomato(text)}`);
	},
	warning(text) {
		console.log(`! ${styles.banana(text)}`);
	},
};
