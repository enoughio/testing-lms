import e, { ErrorRequestHandler, Request, Response, Router } from 'express';
import prisma from '../lib/prisma.js';


export const createBooking = async (req: Request, res: Response) => {
    try {

        // Extract booking data from request body
        const { userId, resourceId, startTime, endTime } = req.body;

        // Basic validation (expand as needed)
        if (!userId || !resourceId || !startTime || !endTime) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        // Example: Save booking to database (replace with your DB logic)
        // const booking = await BookingModel.create({ userId, resourceId, startTime, endTime });
        const checkUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!checkUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const checkResource = await prisma.library.findUnique({
            where: { id: resourceId },
        });


        if (!checkResource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }

        const booking = await prisma.booking.create({
            data: {
                userId,
                resourceId,
                startTime: new Date(startTime),
                endTime: new Date(endTime),
            },
        });

        // Return success response
        return res.status(201).json({ message: 'seat Booking created successfully.', booking });

        return res.status(201).json({ message: 'Booking created successfully.', booking });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to create booking.', error: error.message });
    }
};


export const getAllBookings = async (req: Request, res: Response) => {
    try {
        // Example: Fetch all bookings from database (replace with your DB logic)
        const bookings = await prisma.booking.findMany({
            include: {
                user: true,
                resource: true,
            },
        });

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
};


export const getBookingById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Example: Fetch booking by ID from database (replace with your DB logic)
        const booking = await prisma.booking.findUnique({
            where: { id },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Booking fetched successfully.', booking });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch booking.', error: error.message });
    }
};


export const updateBooking = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userId, resourceId, startTime, endTime } = req.body;

        // Example: Update booking in database (replace with your DB logic)
        const booking = await prisma.booking.update({
            where: { id },
            data: {
                userId,
                resourceId,
                startTime: new Date(startTime),
                endTime: new Date(endTime),
            },
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Booking updated successfully.', booking });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to update booking.', error: error.message });
    }
}


export const deleteBooking = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Example: Delete booking from database (replace with your DB logic)
        const booking = await prisma.booking.delete({
            where: { id },
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Booking deleted successfully.', booking });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to delete booking.', error: error.message });
    }
}   


export const getBookingsByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        if (!userId) {  
            return res.status(400).json({ message: 'User ID is required.' });
        }

        const checkUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!checkUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const bookings = await prisma.booking.findMany({
            where: { userId },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this user.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (e : any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: e.message });
    }
}



export const getBookingsByRoomId = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.params;

        if (!roomId) {
            return res.status(400).json({ message: 'Room ID is required.' });
        }

        const checkResource = await prisma.library.findUnique({
            where: { id: roomId },
        });

        if (!checkResource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }

        const bookings = await prisma.booking.findMany({
            where: { resourceId: roomId },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this resource.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
}


export const getBookingsByDate = async (req: Request, res: Response) => {
    try {
        const { date } = req.params;

        if (!date) {
            return res.status(400).json({ message: 'Date is required.' });
        }

        const bookings = await prisma.booking.findMany({
            where: {
                startTime: {
                    gte: new Date(date),
                    lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
                },
            },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this date.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
}


export const getBookingsByDateRange = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return res.status(400).json({ message: 'Start date and end date are required.' });
        }

        const bookings = await prisma.booking.findMany({
            where: {
                startTime: {
                    gte: new Date(startDate as string),
                    lte: new Date(endDate as string),
                },
            },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this date range.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
}



export const getBookingsByStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.params;

        if (!status) {
            return res.status(400).json({ message: 'Status is required.' });
        }

        const bookings = await prisma.booking.findMany({
            where: { status },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this status.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
}


export const getBookingByLibraryId = async (req: Request, res: Response) => {
    try {
        const { libraryId } = req.params;

        if (!libraryId) {
            return res.status(400).json({ message: 'Library ID is required.' });
        }

        const checkResource = await prisma.library.findUnique({
            where: { id: libraryId },
        });

        if (!checkResource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }

        const bookings = await prisma.booking.findMany({
            where: { resourceId: libraryId },
            include: {
                user: true,
                resource: true,
            },
        });

        if (!bookings) {
            return res.status(404).json({ message: 'No bookings found for this resource.' });
        }

        // Return success response
        return res.status(200).json({ message: 'Bookings fetched successfully.', bookings });
    } catch (error: any) {
        return res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
}


const BookingController = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
    getBookingsByUserId,
    getBookingsByRoomId,
    getBookingsByDate,
}


export default BookingController;