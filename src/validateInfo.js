export default function validateInfo(values) {
	let errors = {}

	if (!values.name.trim()) {
		errors.name = "Username required"

	} else if (values.name.length < 4) {
		errors.name = "Username is to short"
	}


	if (!values.email.trim()) {
		errors.email = "Email required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email address is invalid"
	}

	if (!values.password) {
		errors.password = "Password required"
	} else if (values.password.length < 6) {
		errors.password = "Password need to be 6 charakters or more"
	} else if (!values.password.includes('!') || !values.password.includes('@') || !values.password.includes('#') || !values.password.includes('%') && !values.password.includes(Number)) {
		errors.password = "Password must contain a spacial character (!, @, # or %) and number (0-9)"
	}

	if (!values.passwordRepeat) {
		errors.passwordRepeat = "Password required"
	} else if (values.passwordRepeat !== values.password) {
		errors.passwordRepeat = "Password do not match"
	}

	return errors;

}