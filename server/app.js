'use strict';

const express = require('express')
const basicAuth = require('express-basic-auth')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const fs = require('fs');
const PORT = 9070;
const HOST = '0.0.0.0';

const INVALID_CODE_TAG = 'invalid';
const codeToTagMap = {
    'P9FK0U5V40': 'valid1',
    'LHHR57JEQB': 'valid2',
    '5UFXCIPPC2': 'valid3',
    'OU86HZQZL2': 'rejected',
    'FY9AR8PIEW': 'recalled'
};

const app = express();

app.use(express.static('dist'))

app.get('/compass-ws-rest/trace/:code', (req, res) => {
    const code = req.params.code;
    const tag = toTag(code);
    if (tag === INVALID_CODE_TAG) {
        res.status(400)
    }
    res.json(
        readResponseFile(`${tag}_trace`, code)
    )
});

app.post('/code-authentication/v2/batch', jsonParser, (req, res) => {
    res.json((req.body.codes || [])
        .map(code => readResponseFile(`${toTag(code)}_batch`, code))
    )
});

function readResponseFile(name, code) {
    return JSON.parse(fs.readFileSync(process.cwd() + `/server/responses/${name}.json`)
        .toString()
        .replace(/\{code\}/g, code)
    )
}

function toTag(code) {
    return codeToTagMap[code] || INVALID_CODE_TAG;
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
