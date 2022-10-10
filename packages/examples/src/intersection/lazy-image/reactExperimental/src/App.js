import '@htmlplus/core/card.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/spinner.js';

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
      <plus-intersection once onplus-change={(event) => onChange(event)}>
        <plus-card elevation="10">
          <plus-spinner></plus-spinner>
          <img
            data-hidden="true"
            data-src="https://placekitten.com/200/200"
            alt="Lazy Image"
          />
        </plus-card>
      </plus-intersection>
    </div>
  );
};

export default IntersectionLazyImage;
