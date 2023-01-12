import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Year from "react-live-clock";
import Month from "react-live-clock";
import Progress from "./Progress";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function SectionCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className='Card_Ex'>
    <Card sx={{ minWidth: 345 }}>
      <div>
      <CardHeader className='Main_CardTop'
        title=<h1 className='Main_Word'>서울</h1>/>
        <div/>

      </div>
      <div className='Main_photo'>
      <a href="#">
      <CardMedia
        component="img"
        height="194"
        image="https://w.namu.la/s/b5ce7f785eca5394daf4e19a920e10bd1c2e89352f07ef3256ed61abdc6fb5ae7d24a4379478f9f26df1b53d7674d4c756ecbef6d8105b70992569614ca1fdd7d7dab37e1e184aad394a3bcc05350939c79ed582f3955768c49dcec241d9fc90d277dc5072f8202e20ae8fbd46382472"
        alt=""
      />
     
      </a>
      </div>
       <p className='Photo_Title'>이미지를 클릭하여 시작!</p>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> 
        <IconButton aria-label="share">
          <ShareIcon />
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
          <Typography paragraph>
          </Typography>
        </CardContent>
      </Collapse> 
      <div>
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem className=''>
        <ListItemText primary="날짜 기준" secondary=<Year
        id="Year"
        format={"YYYY"}
        ticking={false}
        timezone={"KR/Pacific"}
      />/><Month format={"MMM"} ticking={false} timezone={"KR/Pacific"}/>
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Leisure
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
      </div>
    </Card>
    <Progress/>
    </div>
  );
}