import axios from 'axios';

const KEY = 'AIzaSyAorRtgG5SfabMrH8EDQaOZSp3qpNEuk2M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});


