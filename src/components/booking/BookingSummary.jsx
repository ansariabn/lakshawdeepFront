import React, { useState, useEffect } from "react"
import moment from "moment"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
	const checkInDate = moment(booking.checkInDate)
	const checkOutDate = moment(booking.checkOutDate)
	const numberOfDays = checkOutDate.diff(checkInDate, "days")
	const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)
	const navigate = useNavigate()

	const handleConfirmBooking = () => {
		setIsProcessingPayment(true)
		setTimeout(() => {
			setIsProcessingPayment(false)
			setIsBookingConfirmed(true)
			onConfirm()
		}, 3000)
	}

	useEffect(() => {
		if (isBookingConfirmed) {
			navigate("/booking-success")
		}
	}, [isBookingConfirmed, navigate])

	return (
		<div className="row shadow">
			<div className="col-md-6 "></div>
			<div className="card card-body">
				<h4 className="card-title hotel-color input-field">Reservation Summary</h4>
				<p className="input-field">
					Name: <strong>{booking.guestFullName}</strong>
				</p>
				<p className="input-field">
					Email: <strong>{booking.guestEmail}</strong>
				</p>
				<p className="input-field">
					Check-in Date: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
				</p>
				<p className="input-field">
					Check-out Date: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
				</p>
				<p className="input-field">
					Number of Days Booked: <strong>{numberOfDays}</strong>
				</p>

				<div className="input-field">
					<h5 className="hotel-color">Number of Guest</h5>
					<strong>
						Adult{booking.numOfAdults > 1 ? "s" : ""} : {booking.numOfAdults}
					</strong>
					<strong>
						<p>Children : {booking.numOfChildren}</p>
					</strong>
				</div>

				{payment > 0 ? (
					<>
						<p className="input-field">
							Total payment: <strong>₹{payment}</strong>
						</p>

						{isFormValid && !isBookingConfirmed ? (
							<Button variant="success" onClick={handleConfirmBooking}>
								{isProcessingPayment ? (
									<>
										<span
											className="spinner-border spinner-border-sm mr-2"
											role="status"
											aria-hidden="true"></span>
										Booking Confirmed, redirecting to payment...
									</>
								) : (
									"Confirm Booking & proceed to payment"
								)}
							</Button>
						) : isBookingConfirmed ? (
							<div className="d-flex justify-content-center align-items-center">
								<div className="spinner-border text-primary" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : null}
					</>
				) : (
					<p className="text-danger input-field">Check-out date must be after check-in date.</p>
				)}
			</div>
		</div>
	)
}

export default BookingSummary
