export const properties = [
  {
    id: 1,
    title: "Beachfront Villa",
    location: "235 Ocean Drive, Miami Beach, FL 33139",
    price: "$1,350,000",
    beds: 3,
    baths: 2,
    sqft: "1500 sq ft",
    image: "/images/image1.png",
  },
  {
    id: 2,
    title: "Eco Loft",
    location: "12th Avenue, Chelsea, Manhattan, New Yo...",
    price: "$100,000",
    beds: 3,
    baths: 2,
    sqft: "1200 sq ft",
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "Luxury Condo",
    location: "415 Broadway, New York, NY 10013",
    price: "$780,000",
    beds: 3,
    baths: 2,
    sqft: "1500 sq ft",
    image: "/images/image3.png",
  },
];

export const addedProperties = [
  {
    id: 4,
    title: "Mountain Retreat",
    location: "12th Avenue, Chelsea, Manhattan, New York, NY",
    price: "$100,000",
    beds: 4,
    baths: 3,
    sqft: "2100 sq ft",
    image: "/images/image4.png",
  },
  {
    id: 5,
    title: "Sunset View Apart...",
    location: "415 Broadway, New York, NY 10013",
    price: "$780,000",
    beds: 3,
    baths: 2,
    sqft: "1900 sq ft",
    image: "/images/image5.png",
  },
  {
    id: 6,
    title: "Country Farmhouse",
    location: "235 Ocean Drive, Miami Beach, FL 33139",
    price: "$1,350,000",
    beds: 5,
    baths: 3,
    sqft: "3200 sq ft",
    image: "/images/image6.png",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Holiand Canals",
    avatar: "/images/r1.jpg",
    star: 5,
    text: '"I found my rental condo within two days of browsing EasyRent.sg. The inquiry process was so simple, and I got a response from the agent almost instantly!"',
  },
  {
    id: 2,
    name: "Tolman Panels",
    avatar: "/images/r2.jpg",
    star: 5,
    text: '"Listing my unit was incredibly easy. I received quality tenant inquiries without any hassle. Highly recommended for any landlord looking to rent fast."',
  },
  {
    id: 3,
    name: "kalian Sandals",
    avatar: "/images/r3.jpg",
    star: 4,
    text: '"EasyRent.sg has helped me connect with serious tenants. The platform is well-organized, and I love receiving email inquiries from potential renters directly."',
  },
];

export const filters = [
  {
    label: "Property Type",
    items: [
      "Single-family Home",
      "Apartment",
      "Condo",
      "Townhouse",
      "Duplex",
      "Land",
      "Comercial Property",
      "Vacation Home",
    ],
  },
  {
    label: "Price Range",
    items: ["Under $500k", "$500k - $1M", "Above $1M"],
  },
  {
    label: "Location",
    items: ["New York", "Miami", "San Francisco", "Los Angeles"],
  },
  {
    label: "Available For",
    items: ["Rent", "Sale"],
  },
  {
    label: "Bedrooms",
    items: ["1", "2", "3", "4+"],
  },
  {
    label: "Bathrooms",
    items: ["1", "2", "3", "4+"],
  },
  {
    label: "Size (Square Footage)",
    items: ["< 1000", "1000-2000", "2000-3000", "3000+"],
  },
  {
    label: "Sort By",
    items: ["Price: Low to High", "Price: High to Low", "Newest Listings"],
  },
];
