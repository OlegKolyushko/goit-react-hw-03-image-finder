import axios from 'axios';

const fetchImageWithQuery = (searchQuery, page = 1) => {
    return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18183853-b5401f44aa1398f977df87bc0&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
};

export default {fetchImageWithQuery};