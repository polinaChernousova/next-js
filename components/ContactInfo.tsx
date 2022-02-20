import { FC } from "react";
import { contactType } from "../types";
import Heading from "./Heading";


type ContactInfoProps = {contact:contactType,}


const ContactInfo:FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    <Heading tag="h3" text="empty contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong> Email:</strong>
        {email}
      </div>

      <div>
        <strong>Address:</strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
