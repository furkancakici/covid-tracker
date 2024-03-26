# Covid Tracker App  v1.0

The Covid Tracker is a web application developed with React.js, which retrieves Covid-19 current data through an API and presents it to users.


## What is Tech Stack?

- React.js (Vite)
- Redux (Toolkit, Saga)
- Tailwind CSS (shadcn-ui)
- Utils (react-i18n, dayjs, @tanstack/react-table, axios, ...)


## How to run?

> STEP 1:
```bash
git clone https://github.com/furkancakici/covid-tracker.git
cd covid-tracker
```

> STEP 2:
```bash
docker build -t covidapp .
```

> STEP 3:
```bash 
docker run -d --rm -p 3000:3000 --name covid-app-container covidapp
```

#### Parametre meaning: 

`docker run -d --rm -p 3000:3000 --name [name of the container] [your docker image name]`