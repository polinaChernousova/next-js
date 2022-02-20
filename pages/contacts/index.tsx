import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { contactType } from "../../types";


type contactsTypeProps = {
  contacts: contactType,
}

export const getStaticProps:GetStaticProps  = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};
const Contacts:FC<contactsTypeProps> = ({ contacts }) => {
  return (
    <div>
      <Heading tag={'h1'} text="Contacts List" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
