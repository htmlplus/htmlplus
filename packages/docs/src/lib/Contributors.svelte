<script lang="ts">
  export let contributors: Array<string> = [];
</script>

<section class="contributors">
  <!-- TODO -->
  <!-- <Text size="5">Contributors</Text> -->
  <div>
    <ul>
      {#each contributors as contributor}
        <li>
          <a
            href="https://github.com/{contributor}"
            rel="noopener"
            target="_blank"
          >
            <span class="image-wrapper">
              <img
                src="https://github.com/{contributor}.png?size=90"
                loading="lazy"
                width="32"
                height="32"
                alt="Contributor {contributor}"
                title="Contributor {contributor}"
                importance="low"
              />
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style scoped>
  .contributors {
    display: block;
    margin-top: 60px;
  }

  /* TODO */
  /* .text {
    margin: 12px 0 !important;
  } */

  ul {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li:hover {
    z-index: 5;
  }

  ul li:not(:last-child) {
    margin-left: -10px;
  }

  a {
    transition: transform 50ms ease-out;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #4c48ff;
    font-size: 11px;
    border: 0;
  }

  a:hover {
    border: 0;
    transform: scale(1.125);
    z-index: 1;
  }

  .image-wrapper {
    border-radius: 100%;
    display: inline-block;
    overflow: hidden;
  }

  img {
    border: solid 2px #4c48ff;
    border-radius: 50%;
    border: 2px solid #fff;
  }
</style>
