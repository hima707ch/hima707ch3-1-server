/**
 * Property Listing API Summary
 *
 * 1. List Properties
 * Endpoint: GET /api/properties/list
 * Query Parameters:
 *   - location (optional): Filter by location
 *   - minPrice (optional): Minimum price filter
 *   - maxPrice (optional): Maximum price filter
 * Response: Array of property objects
 * Example Response:
 * [{
 *   "_id": "...",
 *   "title": "Luxury Beachfront Villa",
 *   "description": "Beautiful villa with direct beach access",
 *   "price": 1200000,
 *   "location": "Miami Beach, FL",
 *   "bedrooms": 4,
 *   "bathrooms": 3,
 *   "area": 3500,
 *   "imageUrl": "https://example.com/villa1.jpg",
 *   "createdAt": "2023-..."
 * }]
 *
 * 2. Get Property Details
 * Endpoint: GET /api/properties/details/:id
 * Parameters:
 *   - id: Property ID (in URL)
 * Response: Single property object
 * Example Response:
 * {
 *   "_id": "...",
 *   "title": "Luxury Beachfront Villa",
 *   "description": "Beautiful villa with direct beach access",
 *   "price": 1200000,
 *   "location": "Miami Beach, FL",
 *   "bedrooms": 4,
 *   "bathrooms": 3,
 *   "area": 3500,
 *   "imageUrl": "https://example.com/villa1.jpg",
 *   "createdAt": "2023-..."
 * }
 */
