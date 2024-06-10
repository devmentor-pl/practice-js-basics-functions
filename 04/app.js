function runTimer() {

    let x = 0


	const parInterval = setInterval(function () {

		const time = new Date().toLocaleTimeString();
		console.log(time);

        x++;
        console.log(x);

        if(x === 5) {
            clearInterval(parInterval);
        }



	}, 5000);

}

runTimer();
