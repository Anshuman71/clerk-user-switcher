// pages/api/getUserId.js
import { withAuth } from "@clerk/nextjs/api";

export default withAuth((request, response) => {
  const { sessionId, userId } = request.auth;
  if (!sessionId) {
    return response.status(401).json({ id: null, message: "No user signed in!" });
  }
  return response.status(200).json({ id: userId });
});