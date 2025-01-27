const User = require('../model/index.js')

const addUser = async (req, res) => {

    try {

        const userFormData = req.body
        const newUser = await User.create(userFormData)

        if (newUser) {
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: newUser
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: `There was an error in server`
        })
    }

}

const getUser = async (req, res) => {

    try {

        const allUsers = await User.find()
        const totalDocuments = await User.countDocuments()
        if (allUsers) {
            res.status(200).json({
                success: true,
                data: allUsers,
                message: 'Users fetched successfully',
                total: totalDocuments
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'No user found'
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: `There was an error in server`
        })
    }

}

const updateUser = async (req, res) => {

    try {

        const id = req.params.id
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })

        if (updatedUser) {
            res.status(200).json({
                success: true,
                data: updatedUser,
                message: 'User updated successfully'
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: `There was an error in server`
        })
    }

}

const deleteUser = async (req, res) => {

    try {

        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        if (deletedUser) {
            res.status(200).json({
                success: true,
                data: deletedUser,
                message: 'User deleted successfully'
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: `There was an error in server`
        })
    }

}

module.exports = { addUser, getUser, updateUser, deleteUser }

