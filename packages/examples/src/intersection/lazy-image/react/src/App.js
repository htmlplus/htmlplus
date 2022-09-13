import { Card, Intersection, Spinner } from '@htmlplus/react';

const IntersectionLazyImage = () => {
  const onChange = (event) => {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.removeAttribute('data-hidden');
      spinner.setAttribute('data-hidden', 'true');
    }, 1000);
  };

  return (
    <div className="container">
      <Intersection once onChange={(event) => onChange(event)}>
        <Card elevation="10">
          <Spinner></Spinner>
          <img
            data-hidden="true"
            data-src="https://placekitten.com/200/200"
            alt="Lazy Image"
          />
        </Card>
      </Intersection>
    </div>
  );
};

export default IntersectionLazyImage;
