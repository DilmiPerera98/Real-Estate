import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  console.log(listing);
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "data:image/jpeg;base64,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"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 rounded-t-lg s"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {listing.name}
          </p>
          <div className="flex items-center gap-1 ">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold flex items-center">
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString("en-US")
              : listing.regularprice.toLocaleString("en-US")}
            {listing.type === "rent" ? "/month" : ""}
          </p>
          <div className="text-slate-700 flex gap-4 ">
            <div className="font-bold text-x5">
              {listing.bedrooms > 1
                ? `${listing.bedrooms}beds`
                : `${listing.bedrooms}bed`}
            </div>
            <div className="font-bold text-x5">
              {listing.bathrooms > 1
                ? `${listing.bathrooms}bathrooms`
                : `${listing.bathrooms}bathroom`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}