import axios from "axios";

export const getContributors = async (componentKey?: string): Promise<any[]> => {
  const url = `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${componentKey}`;
  try {
    const contributors = await axios.get(url)
      .then((response) => {
        return response
          .data
          .map((commit: any) => commit.author?.login)
          .filter((contributor: string, index: number, contributors: string[]) => {
            return contributors?.indexOf(contributor) === index
          })
      });
    return contributors || [];
  }
  catch {
    return []
  }
}