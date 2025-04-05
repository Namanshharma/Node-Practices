const express = require('express');
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/userController')
const router = express.Router();

router.get('/', handleGetAllUsers).post('/', handleCreateNewUser)
router.route('/:id').get(handleGetUserById).patch(handleUpdateUserById).delete(handleDeleteUserById)

// #region 
// router.get('/', async (req, res) => {
//     const allUsers = await User.find({});
//     const html = `
//     <ul>
//         ${allUsers.map((x) => `<li>${x.first_name} - ${x.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// })
// app.get('/api/users/:id', (req, res) => {
//     // const id = Number(req.params.id);
//     // const user = users.find((x) => x.id === id);
//     // return res.json(user);
//     return res.json(users.find(x => x.id === Number(req.params.id)))
// })

// app.patch('/api/users/:id', (req, res) => {
//     console.log(req);
// })

// app.delete('/api/users/:id', (req, res) => {
//     console.log(req);
// })
// users.push({
//     id: users.length + 1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     gender: req.body.gender,
//     phone_number: req.body.phone_number,
// })
// users.push({ ...req.body, id: users.length + 1 });      // here we have used the spread operator     // now after connected with Mongo we don't need to 
// fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.json({
//         Id: users.length,
//         Message: "User Added Successfully"
//     })
// })
// const foundUser = users.find(x => x.first_name === req.body.first_name);
// if (foundUser == undefined || foundUser == null) {
//     return res.status(200).json({
//         Message: "User Didn't found"
//     })
// }
// console.log(foundUser);
// foundUser.first_name = req.body.first_name;
// foundUser.last_name = req.body.last_name;
// foundUser.email = req.body.email;
// foundUser.gender = req.body.gender;
// foundUser.phone_number = req.body.phone_number;
// console.log(foundUser);
// return res.json({
//     message: "Pending"
// })
// const index = users.findIndex(x => x.id === Number(req.params.id));
// if (index >= 0) {
//     const removedUser = users.splice(index, 1);
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         return res.status(200).json({
//             Message: "User Deleted Successfully",
//             Details: removedUser
//         })
//     })
// } else {
//     return res.status(200).json({
//         Message: "User already Deleted"
//     })
// }
// users.filter(x => x.id != Number(req.params.id));
// fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.json({
//         Message: "User Deleted Successfully"
//     })
// })
//#endregion

module.exports = router;