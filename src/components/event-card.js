import React from "react"
import Img from "./img"

const EventCard = ({ imgUrl, alt, date, location, mapUrl }) => {
  return (
    <div>
      <Img
        className="shadow-md shadow-slate-400/50"
        src={imgUrl}
        alt={alt}
      ></Img>
      <div className="flex justify-start gap-x-1">
        <dt class="flex flex-initial w-20">Date</dt>
        <dd class="text-slate-900 font-semibold">{date}</dd>
      </div>
      <div className="flex justify-start mt-2 gap-x-1">
        <dt class="flex flex-initial w-20">Location</dt>
        <dd class="text-slate-900 font-semibold">
          {location.street}
          <br />
          {location.cityStateZip}
          <br />
          <a target={"_blank"} href={mapUrl} rel="noreferrer">
            map
          </a>
        </dd>
      </div>
    </div>
  )
}

export default EventCard
