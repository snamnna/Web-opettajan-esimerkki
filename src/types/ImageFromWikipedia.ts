type ImageFromWikipedia = {
  batchcomplete: string;
  query: {
    pages: {
      [key: string]: {
        pageid: number;
        ns: number;
        title: string;
        thumbnail: {
          source: string;
          width: number;
          height: number;
        };
        pageimage: string;
      };
    };
  };
};

export {ImageFromWikipedia};
