import axios from "axios";

export const getContributors = async (path?: string): Promise<any[]> => {
  const url = `https://api.github.com/repos/htmlplus/htmlplus/commits?path=${path}`;
  try {
    const contributors = await axios.get(url)
      .then((response) => {
        return response
          .data
          .map((commit: any) => commit.author?.login)
          .filter((contributor: string, index: number, contributors: string[]) => {
            return contributor && contributors.indexOf(contributor) === index
          })
      });
    return contributors || [];
  }
  catch {
    return []
  }
}