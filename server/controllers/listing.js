import Lisiting from '../models/lisiting.js';

export const createListing = async (req, res, next) => {
    try {
        const listing = await Lisiting.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};