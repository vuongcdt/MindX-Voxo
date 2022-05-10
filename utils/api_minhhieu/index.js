import { BASE_URL_API } from "../api";

const BLOG_LIST = BASE_URL_API + '/wp-json/wp/v2/posts/';
const BlOG_LIST_CATEGORY = BASE_URL_API + '/wp-json/wp/v2/posts?categories=';
const FEATURED_MEDIA = BASE_URL_API + '/wp-json/wp/v2/media/';
const POST_AUTHOR = BASE_URL_API + '/wp-json/wp/v2/users/';

export { BLOG_LIST, BlOG_LIST_CATEGORY, FEATURED_MEDIA, POST_AUTHOR };