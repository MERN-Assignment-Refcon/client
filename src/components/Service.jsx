import React from "react"
import InfoCard from "./InfoCard"


export const ServiceCard = ({service}) => {

  return (
      <InfoCard
        img="http://refcon.com.au/images/asc_logo.png" 
        cap="Card image cap" 
        title={service.name}
        subtitle={service.description}
        body={service.brief}
        button="GET A QUOTE TODAY!!!"
         />
    );
  };

export default ServiceCard