const jwt = require('jsonwebtoken');

export const generateAccessToken = (user: any): string => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

  return token;
};
