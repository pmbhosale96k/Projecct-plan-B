import React from "react";
import { Routes, Route } from "react-router-dom";

/* Common */
import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleRoute from "../components/common/RoleRoute";

/* Auth */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* Tourist Pages */
import HotelList from "../pages/hotels/HotelList";
import HotelDetails from "../pages/hotels/HotelDetails";
import TripPlanner from "../pages/trip/TripPlanner";
import MyTrips from "../pages/trip/MyTrips";
import PackageList from "../pages/packages/PackageList";
import PackageDetails from "../pages/packages/PackageDetails";
import BookingPage from "../pages/booking/BookingPage";
import MyBookings from "../pages/booking/MyBookings";
import PlacesList from "../pages/explorer/PlacesList";
import NearbyPlaces from "../pages/explorer/NearbyPlaces";
import ItineraryPage from "../pages/itinerary/ItineraryPage";
import UserDashboard from "../pages/dashboard/UserDashboard";

/* Owner Pages */
import OwnerDashboard from "../pages/owner/OwnerDashboard";
import AddHotel from "../pages/owner/AddHotel";
import ManageRooms from "../pages/owner/ManageRooms";
import OwnerBookings from "../pages/owner/OwnerBookings";

/* Admin Pages */
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageHotels from "../pages/admin/ManageHotels";
import ManagePackages from "../pages/admin/ManagePackages";
import ManagePlaces from "../pages/admin/ManagePlaces";

/* 404 */
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<HotelList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Tourist Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/packages" element={<PackageList />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/places" element={<PlacesList />} />
        <Route path="/nearby" element={<NearbyPlaces />} />
        <Route path="/itinerary/:tripId" element={<ItineraryPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>

      {/* Owner Routes */}
      <Route element={<RoleRoute role="OWNER" />}>
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/add-hotel" element={<AddHotel />} />
        <Route path="/owner/manage-rooms" element={<ManageRooms />} />
        <Route path="/owner/bookings" element={<OwnerBookings />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<RoleRoute role="ADMIN" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/hotels" element={<ManageHotels />} />
        <Route path="/admin/packages" element={<ManagePackages />} />
        <Route path="/admin/places" element={<ManagePlaces />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;