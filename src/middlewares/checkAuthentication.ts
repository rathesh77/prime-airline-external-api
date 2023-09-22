import * as express from 'express';

export default function checkAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
    let api_key_from_request = req.header("x-api-key");
    if (!api_key_from_request) {
        res.status(400);
        res.send({
            'code': 'MUST_SPECIFY_API_KEY',
            'message': 'Must specify API key'
        });
        return;
    }
    const api_key_match = global.API_KEYS.find(api_key => api_key === api_key_from_request);
    if (api_key_match === undefined) {
        res.status(400);
        res.send({
            'code': 'MUST_SPECIFY_VALID_API_KEY',
            'message': 'Must specify a valid API key'
        })
        return;
    }
    next();
}