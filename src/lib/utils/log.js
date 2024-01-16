import chalk from 'chalk'

const styles = {
	tomato: chalk.hex('#000000').bgHex('#ff6347'),
	aqua: chalk.hex('#000000').bgHex('#7ffd4'),
	white: chalk.hex('#000000').bgHex('#ffffff'),
	black: chalk.hex('#ffffff').bgHex('#000000'),
};

export default {
	plain(text) {
		console.log(text)
	},
	error(text) {
		console.log(styles.tomato(text))
	},
	bold(text) {
		console.log(chalk.bold(text))
	},
}
