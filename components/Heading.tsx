const Heading = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;

// говорим переменной tag что если  значение не задано то он будет равнятся тегу H1
