import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <title>Confidence Emonena | Dev-Clinton</title>
      <link rel="icon" href="/logomain.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-title"
        content="Best freelance web developer in lagos, best freelance web developer in Nigeria"
      />

      <meta
        key="metaname"
        itemProp="name"
        name="title"
        content="Confidence Emonena | Dev-Clinton"
      />
      <meta
        key="metadescription"
        itemProp="description"
        name="description"
        content="Best freelance web developer in lagos, best freelance web developer in Nigeria"
      />
      <meta
        name="keywords"
        content="Developer, Web developer, mobile app developer, graphics designer, UI/UX designer, freelance"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default Seo;
