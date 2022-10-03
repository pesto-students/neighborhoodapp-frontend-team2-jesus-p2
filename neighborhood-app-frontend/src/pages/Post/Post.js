import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Post.css';
import PostForm from './PostForm';
import CommentIcon from '@mui/icons-material/Comment';
import Comment from './../Comment/Comment';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Header from './../../common/Header';
import Footer from './../../common/Footer'
import Sidebar from '../../common/Sidebar/Sidebar';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post() {
  const [email, setEmail] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const history = useNavigate();

  useEffect(() => {
      console.log("useEffect is called")
      refreshToken();
      getUsers();
  }, []);

  const refreshToken = async () => {
    try{
      const response = await axios.get('http://localhost:8080/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setEmail(decoded.email);
      setExpire(decoded.exp);
    }catch(error) {
      console.log("refreshToken", error)
      if(error.response){
        history('/');
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    console.log("axiosJWTConfig", config)
    const currentDate = new Date();
    if(expire*1000 < currentDate.getTime()){
      const response = await axios.get('http://127.0.0.1:8080/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setEmail(decoded.email);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Header />
      <Sidebar />
      <Card className="post-card" sx={{ maxWidth: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#1976d2" }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="200"
          image={require("./../../assets/images/community.jpeg")}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <PostForm />
              <Comment />
          </CardContent>
        </Collapse>
      </Card>
    <Footer />
    </>
  );
}
