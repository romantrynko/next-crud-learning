import connectMongo from '../../database/connection';

export default function handler(req, res) {
  connectMongo();
}
