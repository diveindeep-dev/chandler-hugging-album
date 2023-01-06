interface Cover {
  size: string;
  '#text': string;
}

interface Album {
  artist: string;
  image: Cover[];
  mbid: string;
  name: string;
  url: string;
  streamable: string;
}

interface CoverData {
  artist: string;
  name: string;
  image: string;
}
