import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import checkAuthenticated from '../middlewares/checkAuthentication';
import global from '../types';

const router = express.Router();

router.post('/book', checkAuthenticated, async (req: Request, res: Response) => {

  try {
    const response = await axios.post(global.BOOKING_API + "/book", {book: req.body});
    res.send(response.data);
  } catch (e) {
    console.log(e)
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});

router.get('/booking-history', checkAuthenticated, async (req: Request, res: Response) => {

  try {
    if (req.query.userId === undefined) {
      res.sendStatus(400)
      return
    }

    const response = await axios.get(global.BOOKING_API + "/booking-history", { params: { userId: req.query.userId } });
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});

router.post('/cancel-book', checkAuthenticated, async (req: Request, res: Response) => {

  try {
    const response = await axios.post(global.QUEUE_API + "/cancel-book", { bookingId: req.body.bookingId }, { headers: { 'x-api-key': req.headers['x-api-key']}});
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'QUEUE_API unreachable'
    });
  }
});

export default router;