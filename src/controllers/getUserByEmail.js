// const { userServices } = require('../services');

// module.exports = async (req, res) => {
//   try {
//     const userByEmail = await userServices.getByUserEmail(req.params.email);
//     if (!userByEmail) throw Error;
//     return res.status(200).json(userByEmail);
//   } catch (err) {
//     return res.status(404).json({ message: 'User not found' });
//   }
// };