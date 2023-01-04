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
