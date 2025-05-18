import { Router } from "express";
import  BookingController  from "../controllers/bookingController";



const router = Router();

router.post("/create", BookingController.createBooking);
router.get("/getAll", BookingController.getAllBookings);
router.get("/getById/:id", BookingController.getBookingById);
router.put("/update/:id", BookingController.updateBooking);
router.delete("/delete/:id", BookingController.deleteBooking);
router.get("/getByUserId/:userId", BookingController.getBookingsByUserId);
router.get("/getByRoomId/:roomId", BookingController.getBookingsByRoomId);
router.get("/getByDate/:date", BookingController.getBookingsByDate);
router.get("/getByDateRange", BookingController.getBookingsByDateRange);
router.get("/getByStatus/:status", BookingController.getBookingsByStatus);
