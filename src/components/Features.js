import { TbMap2 } from "react-icons/tb";
import { GiPeaceDove, GiTakeMyMoney } from "react-icons/gi";
import { FaEnvira } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full text-gray-700">
      {/* CONTAINER */}
      <div className="mx-auto py-10 px-4 w-full max-w-7xl grid grid-cols-2">
        {/* :ILLUSTRATION */}
        <div className="order-2 lg:order-1 col-span-1 lg:row-span-2 my-1 relative w-full hidden sm:block">
          <img
            src="images/hijab.webp"
            alt="traveling-hijab"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>

        {/* :TITLE */}
        <div className="order-1 lg:order-2 col-span-full sm:col-span-1 row-span-1 mb-8 w-full space-y-4 text-center sm:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Your Halal-friendly Holidays Companions
          </h2>
          <p className="text-sm">
            Find the best locations according to your specific needs — whether
            it’s a resort with a city hotel with halal food, or villa with a
            secluded pool or just a homestay for digital nomad to work from
            anywhere.
          </p>
          <div className="my-auto">Why choose us?</div>
        </div>
        {/* :FEATURES */}
        <dl className="order-3 col-span-full lg:col-span-1 row-span-1 w-full grid grid-cols-4 gap-6">
          {/* ::Feature 1 -> Aiport Car */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-sky-500">
              <TbMap2 className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                We've personally visited all the destinations we offer{" "}
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">
                We've personally visited all the destinations we offer{" "}
              </dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                We’re halal travel experts who’ve either lived in or travelled
                to the destinations we offer.
              </dd>
            </div>
          </div>

          {/* ::Feature 2 -> 24/7 Support */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-teal-500">
              <GiPeaceDove className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Travel with peace of mind
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">
                Travel with peace of mind
              </dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                With the current global situation, we aim to be as flexible as
                possible to give you peace of mind when booking with us. You
                will know ahead of time your refund and cancellation options.{" "}
              </dd>
            </div>
          </div>

          {/* ::Feature 3 -> Special Discount  */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-800">
              <GiTakeMyMoney className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                We don't charge service fees
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">
                We don't charge service fees{" "}
              </dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                We never charge any one-off or service fees and we never charge
                you anymore than what your actual holiday costs.
              </dd>
            </div>
          </div>

          {/* ::Feature 4 -> Tour Guide */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-400">
              <FaEnvira className="w-10 lg:w-14 h-10 lg:h-14 text-white" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Support local people and environment{" "}
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">
                Support local people and environment{" "}
              </dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                We strive to make the right choices to protect our planet and
                create a positive impact. From hiring local tour guides in our
                destinations to working with eco-friendly hotels.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Features;
