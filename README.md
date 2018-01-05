# Weather
![Screenshot](https://github.com/thesauri/weather/raw/master/screenshot.png "Screenshot")

This is a small weather reporting application developed for [Reaktor's summer job challenge](https://github.com/reaktor/kesa-2018). Users can see weather observations from a set of citites around the globe and contribute with their own observations. The project consists of a frontend and a backend that have been split into two seperate entities. The frontend is built using React and communicates with the Rails backend using REST.

A live demo can be found here: https://thesauri.github.io/weather/.

One specification was to verify that the entries are done sane. This application considers all numerical values between -100°C–100°C to be valid (leaving some room for climate change). This is verified both in the frontend and the backend. The former gives users instant feedback on invalid entries and the latter prevents malicious entries from being POSTed directly to the server. Tests have been written for the backend entry verification.

The backend is hosted on Heroku and entries are persisted to a PostgreSQL database.

Feel free to play around with the application, it can be reset at any time with the reset button in the footer.