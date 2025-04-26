/*
Property Listing API Documentation

1. List Properties
   Endpoint: GET /api/properties/list
   Query Parameters:
   - location (optional): Filter properties by location
   - minPrice (optional): Minimum price filter
   - maxPrice (optional): Maximum price filter
   Response: Array of property objects
   {
     properties: [
       {
         _id: string,
         title: string,
         description: string,
         price: number,
         location: string,
         bedrooms: number,
         bathrooms: number,
         area: number,
         imageUrl: string,
         createdAt: date
       }
     ]
   }

2. Get Property Details
   Endpoint: GET /api/properties/details/:id
   Parameters:
   - id: Property ID (in URL)
   Response: Single property object
   {
     _id: string,
     title: string,
     description: string,
     price: number,
     location: string,
     bedrooms: number,
     bathrooms: number,
     area: number,
     imageUrl: string,
     createdAt: date
   }

Error Responses:
- 404: Property not found
- 500: Server error
*/
