import Logger from "../utils/Logger";
import StatusCode from "../utils/StatusCode";
import {Request, Response} from "express";
import {CreateUser, ReadUser} from "../utils/Interface";
import UserModel from "../models/UserModel";


const createUser = async (req: Request, res: Response) => {
    try {
        Logger.info('createUser()')
        Logger.http(req.body)
        const {name, age, gender} = req.body
        if (name && age && gender) {
            const newObject: CreateUser = {
                name: name,
                age: Number(age),
                gender: gender
            }
            Logger.http(newObject)
            const user = new UserModel(newObject)
            const dbResponse = await user.save()
            Logger.http(dbResponse)
            res.status(StatusCode.CREATED).send(dbResponse)
        } else {
            Logger.error('name, age or gender failed')
            res.status(StatusCode.BAD_REQUEST).send({
                message: 'Felaktig body'
            })
        }
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Fel vid skapande Användare'
        })
    }
}

const getAllUsers = (req: Request, res: Response) => {
    try {
        UserModel.find({}, '', (error: ErrorCallback, users: Array<ReadUser>) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att hämta användare'
                })
            } else {
                Logger.http(users)
                res.status(StatusCode.OK).send(users)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användare'
        })
    }
}

const getUserById = (req: Request, res: Response) => {
    try {
        UserModel.findById(req.params.id, '', (error: ErrorCallback, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att hämta användare'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).send(user)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användare med ID'
        })
    }
}

const getUserByNameAndGender = (req: Request, res: Response) => {
    try {
        UserModel.find({
            name: req.params.name,
            gender: req.params.gender
        }, '', (error: ErrorCallback, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att hämta användare'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).send(user)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användare med gender'
        })
    }
}

const updateUserById = (req: Request, res: Response) => {
    try {
        Logger.debug(req.params.id)
        Logger.debug(req.body)
        const updatedUser: CreateUser = {
            name: req.body.name,
            age: Number(req.body.age),
            gender: req.body.gender
        }
        Logger.debug(updatedUser)

        // @ts-ignore
        UserModel.findOneAndUpdate(req.params.id, updatedUser, {new: true}, (error, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att uppdatera användare'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).send(user)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att uppdatera användare'
        })
    }
}

const deleteUserById = (req: Request, res: Response) => {
    try {
        UserModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att ta bort användare'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).json(
                    user ? {
                            message: `Användere med id '${req.params.id}'  togs bort från databasen!`
                        }
                        : {
                            message: `Användare med id '${req.params.id}' hittades inte!`
                        })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att ta bort användare'
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByNameAndGender,
    updateUserById,
    deleteUserById
}