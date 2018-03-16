const
	appContainer = document.getElementsByClassName('app-container')[0],
	inpTweet = appContainer.querySelector('INPUT.tweet'),
	btnSubmit = appContainer.querySelector('BUTTON[type="submit"]'),
	outResults = appContainer.querySelector('OUTPUT.results');

function processTweet() {
	const input = inpTweet.value;

	if (input) {
		const results = execute(input);

		outResults.value = `Hmm... I think this is a Tweet from ${results === 'Kardashian' ? `a ${results}` : results}.`;
	} else {
		null;
	}
}

btnSubmit.addEventListener('click', processTweet);