import Post from './Post'
import json from './assets/json'
import styles from './styles/styles.css'
import logo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Title', logo)
console.log(post.toString());

console.log(json);