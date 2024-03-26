# Covid Tracker App v1.0

The Covid Tracker is a web application developed with React.js, which retrieves Covid-19 current data through an API and presents it to users.

Live: [Covid Tracker App](https://covid-tracker-furkancakici.vercel.app/)

## What is Tech Stack?

-   React.js (Vite)
-   Redux (Toolkit, Saga)
-   Tailwind CSS (shadcn-ui)
-   Utils (react-i18n, dayjs, @tanstack/react-table, axios, ...)

## Folder Structure

```bash
├── App.tsx
├── assets
│   └── react.svg
├── components // Atomic Design Approach
│   ├── atoms
│   │   └── ui
│   │       ├── button.tsx
│   │       └── ...
│   ├── molecules
│   │   ├── data-table.tsx
│   │   └── ...
│   └── organism
│       ├── footer.tsx
│       └── ...
├── constants
│   └── index.ts
├── hooks
│   └── use-search-query.ts
├── i18n
│   └── index.ts
├── lib
│   ├── helper.ts
│   └── ...
├── main.tsx
├── pages
│   ├── country-detail-page.tsx
│   └── ...
├── redux
│   ├── index.ts
│   ├── sagas
│   │   ├── report-saga.ts
│   │   ├── root-saga.ts
│   │   └── total-report-saga.ts
│   └── slices
│       ├── report-slice.ts
│       ├── root-slice.ts
│       └── total-report-slice.ts
├── router
│   └── index.tsx
├── service
│   ├── base-service.ts
│   └── covid-tracker-service.ts
├── styles
│   └── globals.css
├── types
│   ├── report-payload-type.ts
│   ├── report-slice-type.ts
│   ├── reports-type.ts
│   └── total-report-type.ts
└── vite-env.d.ts

```

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
