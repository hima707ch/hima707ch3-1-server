/*
API Endpoints Summary:

1. Search Properties
   Endpoint: GET /api/properties/search
   Query Parameters:
   - location (optional): String - Property location
   - minPrice (optional): Number - Minimum price
   - maxPrice (optional): Number - Maximum price
   - bedrooms (optional): Number - Number of bedrooms
   Response: Array of property objects matching the search criteria
   Example Response: [
     {
       "_id": "...",
       "title": "Modern Downtown Apartment",
       "location": "New York City",
       "price": 500000,
       "description": "Beautiful modern apartment",
       "bedrooms": 2,
       "bathrooms": 2,
       "area": 1000,
       "createdAt": "2023-..."
     }
   ]

2. Get Property Details
   Endpoint: GET /api/properties/:id
   Parameters:
   - id: String - Property ID
   Response: Single property object with detailed information
   Example Response:
   {
     "_id": "...",
     "title": "Modern Downtown Apartment",
     "location": "New York City",
     "price": 500000,
     "description": "Beautiful modern apartment",
     "bedrooms": 2,
     "bathrooms": 2,
     "area": 1000,
     "createdAt": "2023-..."
   }
*/