import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <title>Emonena Confidence | Freelance web and mobile app developer</title>
      <meta
        name="description"
        content="Skilled software developer proficient in relevant technologies, ready to contribute to your projects. Expertise in front-end and back-end development, utilizing React, React Native, Node.js, Python, Java, and more. Strong problem-solving abilities, effective communication skills, and attention to detail. Experienced in designing and implementing scalable applications, adhering to best practices. Collaborative and adaptable, committed to continuous learning and staying up-to-date with industry trends. Let's connect and explore how I can add value to your organization."
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content=" Emonena Confidence | Dev-Clinton" />
      <meta name="publisher" content="Dev-Clinton" />

      {/* Add other relevant meta tags for SEO */}
    </Helmet>
  );
};

export default Seo;
