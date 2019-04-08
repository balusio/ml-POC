import axios from 'axios';
import {AUTHOR_NAME,AUTHOR_LASTNAME} from './env';
axios.defaults.headers.common['Authorization'] = AUTHOR_NAME + AUTHOR_LASTNAME;
