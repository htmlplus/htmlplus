<script>
import { Element } from '@htmlplus/element';

@Element("plus-aspect-ratio-default")
class AspectRatioDefault {
  render() {
    return <plus-aspect-ratio value="16/9">
  <plus-card tile>
    This box will always be 16/9 (unless you put more stuff in it)
  </plus-card>
    </plus-aspect-ratio>;
  }

}
</script>

<style>
plus-card {
  --plus-card-background-color: #C5CAE9;
  padding: 1rem;
}
</style>
