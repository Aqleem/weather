    function getWeather() {
        let input = document.querySelector("input").value;
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=560dc8bfa2794a7872a2c953177e7dd9&units=metric`,
            success: function(data) {
                console.log(data);
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = data.main.temp;
                document.querySelector(".location").innerHTML = `${data.name}, ${data.sys.country}`;
                document.querySelector(".desc").innerHTML = data.weather[0].main;
                document.querySelector(".w-speed").innerHTML = data.wind.speed;

            }
        })
        $.ajax({
            url: `http://samples.openweathermap.org/data/2.5/forecast?q=${input}&appid=560dc8bfa2794a7872a2c953177e7dd9&units=metric`,
            success: function(data) {
                console.log(data);

            }
        })
    }