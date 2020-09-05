import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const FeatureSection = ({ title, image, content, align }) => {
  console.log(title, image, content, align);

  const alignRight = align === 'right';
  return (
    <section className="space-y-16 container">
      <div className="px-4 md:px-12">
        <h1
          className={`sm:title title-sm text-primary-300 break-words ${
            alignRight ? 'text-right' : 'text-left'
          }`}
        >
          {title}
        </h1>
      </div>
      <div className="px-4 md:px-24">
        <div className="bg-white-100 rounded-lg overflow-hidden max-w-md mx-auto flex flex-col lg:flex-row md:max-w-full cm-shadow-200">
          <Img
            fluid={image.fluid}
            className={`w-full lg:max-w-xs block ${
              !alignRight ? 'lg:block' : 'lg:hidden'
            }`}
          />
          <div className="py-4 px-4 space-y-4">
            {content.map(({ text, title }) => (
              <div className="space-y-2">
                <h2 className="sm:cm-h2 cm-h4 text-primary-300">{title}</h2>
                <p className="cm-p3 text-black-300">{text}</p>
              </div>
            ))}
          </div>
          {alignRight && (
            <Img
              fluid={image.fluid}
              className="hidden lg:block w-full lg:max-w-xs"
            />
          )}
        </div>
      </div>
    </section>
  );
};

FeatureSection.defaultProps = {
  align: 'left'
};

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']),
  image: PropTypes.object.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FeatureSection;
