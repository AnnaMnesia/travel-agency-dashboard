import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  // 🔐 Auth
  route("sign-in", "routes/root/sign-in.tsx"),

  // 🔌 API
  route("api/create-trip", "routes/api/create-trip.ts"),

  // 🧑‍💼 Admin
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
    route("trips", "routes/admin/trips.tsx"),
    route("trips/create", "routes/admin/create-trip.tsx"),
    route("trips/:tripId", "routes/admin/trip-detail.tsx"),
  ]),

  // 🌍 Public
  layout("routes/root/page-layout.tsx", [
    index("routes/root/travel-page.tsx"),
    route("oauth-success", "routes/root/oauth-success.tsx"), // ✅ ADD THIS
    route("travel/:tripId", "routes/root/travel-detail.tsx"),
    route("travel/:tripId/success", "routes/root/payment-success.tsx"),
  ]),
] satisfies RouteConfig;
