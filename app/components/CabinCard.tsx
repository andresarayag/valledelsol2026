import HorizontalGallery from './HorizontalGallery';
import AmenitiesCarousel from './AmenitiesCarousel';
import { Cabin } from './types';

interface CabinCardProps {
  cabin: Cabin;
}

export default function CabinCard({ cabin }: CabinCardProps) {
  return (
    <div className="space-y-8">
      {/* Title and Description */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {cabin.title}
          </h3>
          <p className="text-gray-700">{cabin.description}</p>
        </div>
      </section>

      {/* Image Gallery */}
      {cabin.images.length > 0 && (
        <HorizontalGallery images={cabin.images} height={400} />
      )}

      {/* Details and Amenities */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Details - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{cabin.details}</p>
              </div>
              {/* Reserve Button */}
              <div className="mt-6">
                <button
                  id={cabin.reserveButtonId}
                  className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
                >
                  Reservar
                </button>
              </div>
            </div>

            {/* Amenities - 1/3 width */}
            <div className="lg:col-span-1">
              {cabin.amenities.length > 0 && (
                <AmenitiesCarousel amenities={cabin.amenities} slidesToShow={3} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
