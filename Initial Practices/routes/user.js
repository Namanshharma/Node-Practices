const express = require('express');

const router = express.Router();

// router.get('/', async (req, res) => {
//     const allUsers = await User.find({});
//     const html = `
//     <ul>
//         ${allUsers.map((x) => `<li>${x.first_name} - ${x.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// })

router.get('/', async (req, res) => {
    // const allUsers = await User.find();
    return res.status(200).json(await User.find());
})

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

// we can merge them together
router.post('/', async (req, res) => {
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
    if (!req.body || !req.body.first_name || !req.body.email || !req.body.phone_number) { return res.status(400).json({ message: "First Name, Email and Phone number are mendatory" }); }
    const result = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number,
    });
    console.log(result);
    return res.status(201).json({ Message: "User Added Successfully" });
})

router.route('/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        // return res.status(200).json(User.find(x => x.id === Number(req.params.id)));
        return res.status(200).json(user);
    })
    .patch(async (req, res) => {
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
        await User.findByIdAndUpdate(req.params.id, { last_name: req.body.last_name });
        const user = await User.findById(req.params.id);
        return res.status(201).json({
            Message: "Success",
            UpdatedUser: user
        })
    })
    .delete(async (req, res) => {
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
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            Message: "Success",
            Users: await User.find({})
        })
    })

module.exports = router;