import '@htmlplus/core/aspect-ratio.js';
import '@htmlplus/core/card.js';

const AspectRatioDefault = () => {
  return (
    <plus-aspect-ratio value="16/9">
      <plus-card tile>
        This box will always be 16/9 (unless you put more stuff in it)
      </plus-card>
    </plus-aspect-ratio>
  );
};

export default AspectRatioDefault;
