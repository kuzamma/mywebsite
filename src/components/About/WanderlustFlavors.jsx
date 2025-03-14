import React from 'react';
import { FaUtensils  } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Correct import
import L from 'leaflet'; // Import Leaflet for custom icons
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Fix for default marker icons in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const WanderlustFlavors = () => {
  const travelSpots = [
    { 
      location: "Davao City, Philippines", 
      coordinates: [7.1907, 125.4553], // [latitude, longitude]
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "My hometown, where the durian is plentiful and the traffic laws are merely suggestions.",
      favorite: "Durian fruit and local seafood"
    },
    { 
      location: "Siargao Island, Philippines", 
      coordinates: [9.7853, 126.1198], // [latitude, longitude]
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Where I pretend to be a surfer but mostly just fall dramatically while tourists take photos.",
      favorite: "Fresh coconut and grilled fish"
    },
    { 
      location: "Tokyo, Japan", 
      coordinates: [35.6762, 139.6503], // [latitude, longitude]
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Visited once and now I'm insufferable about Japanese culture. I say 'arigatou' to sushi chefs in Manila.",
      favorite: "Authentic ramen and takoyaki"
    },
    { 
      location: "Palawan, Philippines", 
      coordinates: [9.8349, 118.7384], // [latitude, longitude]
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "HEHE",
      favorite: "Fresh seafood and tropical fruits"
    }
  ];

  const recipes = [
    {
      name: "Adobo with a Twist",
      ingredients: ["Chicken", "Soy sauce", "Vinegar", "Garlic", "Bay leaves", "Secret ingredient"],
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My version of adobo has a secret ingredient that I'll never reveal. It's either cinnamon or spite, depending on my mood that day."
    },
    {
      name: "Procrastinator's Pasta",
      ingredients: ["Pasta", "Whatever is in the fridge", "Desperation", "Deadline pressure"],
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "Created during a late-night coding session when I realized I hadn't eaten in 8 hours. Now it's my signature dish for impressing dates with my 'creativity'."
    }
  ];

  return (
    <div>
      <h2 className="section-title">Travel Adventures</h2>
      <p className="text-gray-500 italic">
        Don’t take anything too seriously in this section—some of it is just my delulu self, hahaha!
      </p>
      <div className="mb-12">

        {/* Interactive Map */}
        <div className="card p-0 overflow-hidden mb-8">
          <div className="h-64 md:h-80 bg-gray-200 relative">
            <MapContainer
            
              center={[12.8797, 121.7740]} // Center on the Philippines
              
              zoom={5} // Zoom level
              style={{ height: '100%', width: '100%' }} // Map size
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
               
              />
              {/* Add Markers for each travel spot */}
              {travelSpots.map((spot, index) => (
                <Marker key={index} position={spot.coordinates}>
                  <Popup>
                    <div>
                      <h3 className="font-bold text-lg">{spot.location}</h3>
                      
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Display Travel Spots as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {travelSpots.map((spot, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 relative">
                <img 
                  src={spot.image} 
                  alt={spot.location} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-xl">{spot.location}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">{spot.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <FaUtensils />
                  <p>Favorite food: {spot.favorite}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




      <h2 className="section-title">Signature Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {recipes.map((recipe, index) => (
          <div key={index} className="card overflow-hidden hover:shadow-lg transition-all">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto bg-gray-200">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                <div className="mb-3">
                  <h4 className="font-medium text-sm text-gray-700 mb-1">Ingredients:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm italic">{recipe.story}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Food Adventures</h2>
      <div className="card p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">The Great Durian Challenge</h3>
            <p className="text-gray-700 mb-3">
              My first encounter with durian was both a cultural initiation and a test of courage. Known as the "king of fruits" in Southeast Asia and infamous for its pungent smell, durian is a polarizing delicacy that divides people into passionate lovers and vehement haters.
            </p>
            <p className="text-gray-700 mb-3">
              Davao City, the durian capital of the Philippines, avoiding this spiky fruit was impossible. I finally convinced myself to try it on my 16th birthday, building it up as a coming-of-age ritual. The moment of truth arrived with a freshly opened durian, its distinctive aroma filling the room.
            </p>
            <p className="text-gray-700">
              That first taste was... confusing. My brain couldn't reconcile the custard-like texture with the complex flavor that somehow combined sweetness, creaminess, and hints of what I can only describe as "garlicky ice cream." But by the third bite, something clicked. Now I'm a proud durian enthusiast who will defend its honor against all critics!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-secondary">The Tokyo Ramen Quest</h3>
            <p className="text-gray-700 mb-3">
              During my trip to Tokyo, I made it my mission to find the best ramen in the city. Armed with a list of recommendations and a very patient travel companion, I embarked on what became known as "The Great Ramen Marathon of 2023."
            </p>
            <p className="text-gray-700 mb-3">
              Over five days, I tried 8 different ramen shops, from famous chains to tiny hole-in-the-wall spots with just six seats. I kept detailed notes on broth richness, noodle texture, and chashu tenderness like a serious food critic (much to my friend's amusement).
            </p>
            <p className="text-gray-700">
              The winner? A tiny shop in Shimokitazawa where the chef had been perfecting his tonkotsu broth for 25 years. When I told him in broken Japanese that his ramen was the best I'd ever had, he simply nodded and said, "Of course." That confidence was well-earned. I still dream about that bowl of ramen.
              
            </p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Local Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[
          { name: "Café Demitasse", type: "Coffee Shop", location: "", specialty: "Pour-over coffee and homemade pastries", why: "My second office where the baristas know my order before I reach the counter." },
          { name: "Lola Mia's Eatery", type: "Local Restaurant", location: "", specialty: "Traditional Filipino breakfast", why: "Best tapsilog in town, and Lola Mia still remembers my name even though I only visit twice a year." },
          { name: "Baywalk Sunset Spot", type: "Outdoor Space", location: "", specialty: "Fresh seafood from nearby vendors", why: "Perfect place to watch the sunset while enjoying grilled fish and cold beer." }
        ].map((place, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{place.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {place.type}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {place.location}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">Known for:</span> {place.specialty}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm italic">{place.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WanderlustFlavors;