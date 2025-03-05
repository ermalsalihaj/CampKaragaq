const express = require("express");
const router = express.Router();
const BookingModel = require("../models/booking-model");
const validateToken = require("../middlewares/validate-token");

router.post("/get-admin-reports", validateToken, async (req, res) => {
  try {
    const { startDate, endDate, eventId } = req.body;

    let query = {};

    if (eventId) {
      query = { event: eventId };
    }

    if (startDate && endDate) {
      query = {
        ...query,
        createdAt: {
          $gte: new Date(startDate),
          $lt: new Date(endDate),
        },
      };
    }

    const bookings = await BookingModel.find(query);

    const totalBookings = bookings.length;

    const cancelledBookings = bookings.filter(
      (booking) => booking.status === "cancelled"
    ).length;

    const totalTickets = bookings.reduce(
      (acc, booking) => acc + booking.ticketsCount,
      0
    );

    const cancelledTickets = bookings
      .filter((booking) => booking.status === "cancelled")
      .reduce((acc, booking) => acc + booking.ticketsCount, 0);

    const totalRevenueCollected = bookings.reduce(
      (acc, booking) => acc + booking.totalAmount,
      0
    );

    const totalRevenueRefunded = bookings
      .filter((booking) => booking.status === "cancelled")
      .reduce((acc, booking) => acc + booking.totalAmount, 0);

    const responseObject = {
      totalBookings,
      cancelledBookings,
      totalTickets,
      cancelledTickets,
      totalRevenueCollected,
      totalRevenueRefunded,
    };

    return res.status(200).json({ data: responseObject });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
