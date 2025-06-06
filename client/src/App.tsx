import { BrowserRouter, Routes, Route } from "react-router-dom"
import ThemeProvider from "./theme"
import LoginPage from "./pages/auth/login"
import RegisterPage from "./pages/auth/register"
import HomePage from "./pages/private/home"
import ProfilePage from "./pages/private/profile"
import PublicLayout from "./layouts/public-layout"
import PrivateLayout from "./layouts/private-layout"
import EventsPage from "./pages/private/admin/events"
import CreateEventPage from "./pages/private/admin/events/create"
import EditEventPage from "./pages/private/admin/events/edit"
import EventInfoPage from "./pages/private/event"
import UserBookingPage from "./pages/private/profile/bookings"
import AdminBookingsPage from "./pages/private/admin/bookings"
import UsersPage from "./pages/private/admin/users"
import AdminReports from "./pages/private/admin/reports"
import UserReports from "./pages/private/profile/reports/page"
import PublicHomePage from "./pages/public/home"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><PublicHomePage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><RegisterPage /></PublicLayout>} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<PrivateLayout><HomePage /></PrivateLayout>} />
          <Route path="/event/:id" element={<PrivateLayout><EventInfoPage /></PrivateLayout>} />
          <Route path="/profile" element={<PrivateLayout><ProfilePage /></PrivateLayout>} />
          <Route path="/profile/bookings" element={<PrivateLayout><UserBookingPage /></PrivateLayout>} />
          <Route path="/profile/reports" element={<PrivateLayout><UserReports /></PrivateLayout>} />
          <Route path="/admin/events" element={<PrivateLayout><EventsPage /></PrivateLayout>} />
          <Route path="/admin/events/create" element={<PrivateLayout><CreateEventPage /></PrivateLayout>} />
          <Route path="/admin/events/edit/:id" element={<PrivateLayout><EditEventPage /></PrivateLayout>} />
          <Route path="/admin/bookings" element={<PrivateLayout><AdminBookingsPage /></PrivateLayout>} />
          <Route path="/admin/users" element={<PrivateLayout><UsersPage /></PrivateLayout>} />
          <Route path="/admin/reports" element={<PrivateLayout><AdminReports /></PrivateLayout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
