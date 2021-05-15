# stockbit assessment movie app
[![codecov](https://codecov.io/gh/priambudiLB/stockbit-assessment/branch/main/graph/badge.svg?token=Qb2CT5mSJo)](https://codecov.io/gh/priambudiLB/stockbit-assessment)

by Priambudi Lintang Bagaskara (Bagas)

Note:
1. Logic Test Answer is in assessment.js
2. Deployed to https://stockbit-assessment.vercel.app/
## Installation

```sh
# clone project, or just use the zipped project.
git clone https://github.com/priambudiLB/stockbit-assessment.git

# switch directory to project's root directory.
cd stockbit-assessment

# create env file from existing example env file.
cp .env.example .env

# install modules
npm install --force
```

## Running
```sh
# development, should be port 3000
npm start

# production, should be port 5000
npm run build && npm run serve
```

## Test
```sh
npm run test:coverage
```
