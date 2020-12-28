import 'dotenv/config';
import { Router } from 'express';
import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const ibmRouter = Router();

ibmRouter.post('/', async (request, response) => {
    const { text } = request.body;

    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
            apikey: process.env.API_KEY,
        }),
        serviceUrl:
            'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/e035e158-2c2d-484b-b6ae-3ad92ab15c4f',
        disableSslVerification: true,
    });

    const params = {
        text,
        voice: 'pt-BR_IsabelaV3Voice', // Optional voice
        accept: 'audio/wav',
    };

    textToSpeech
        .synthesize(params)
        .then(res => {
            const audio = res.result;
            return textToSpeech.repairWavHeaderStream(audio);
        })
        .then(repairedFile => {
            fs.writeFileSync('public/audio.wav', repairedFile);
            console.log('audio.wav written with a corrected wav header');

            return response.json({ ok: true });
        })
        .catch(err => {
            console.log(err);
        });
});

export default ibmRouter;
