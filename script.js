let gone_album_cover = document.getElementById("gone_album_cover");
let conc_album_cover = document.getElementById("conc_album_cover");

let gone = {
  title: "Gone",
  year: 2020,
  stream_url: "https://open.spotify.com/album/7qSvbiQMdYGSiL8Ueqsijx",
  download_url: "https://tatakae.bandcamp.com/album/gone-single",
  spotify_embed: "https://open.spotify.com/embed/album/7qSvbiQMdYGSiL8Ueqsijx",
};

let concussions = {
  title: "Concussions",
  year: 2019,
  stream_url: "https://distrokid.com/hyperfollow/tatakae/concussions-ep-2",
  download_url: "https://tatakae.bandcamp.com/album/concussions-ep",
  spotify_embed: "https://open.spotify.com/embed/album/7tP2sr2W81uNUSrEzffGGc",
};

gone_album_cover.onclick = function () {
  document.getElementById("stream_anchor").href = gone.stream_url;
  document.getElementById("dl_anchor").href = gone.download_url;
  document.getElementById("spotify_embed").src = gone.spotify_embed;
  document.getElementById("title").innerHTML = gone.title;
  document.getElementById("year").innerHTML = gone.year;
};

conc_album_cover.onclick = function () {
  document.getElementById("stream_anchor").href = concussions.stream_url;
  document.getElementById("dl_anchor").href = concussions.download_url;
  document.getElementById("spotify_embed").src = concussions.spotify_embed;
  document.getElementById("title").innerHTML = concussions.title;
  document.getElementById("year").innerHTML = concussions.year;
};
