import { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class CardList extends Component {

	
	render() {
		const { users } = this.props;
		console.log(users)
		return ( 
			<Card sx={{ maxWidth: 345 }}>
			{users.map((user) => 
			<CardActionArea key={user.id}>
					<CardMedia
					component="img"
					height="350"
					image="https://as1.ftcdn.net/v2/jpg/01/87/10/40/1000_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg"
					alt="default profile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
						
							<span>{user.name}</span>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<span>Phone: {user.phone}</span><br/>
							<span>Website: {user.website}</span>
						</Typography>
					</CardContent>
			</CardActionArea>
			)}	
			</Card>
			
			// <div>
			// 	{users.map((user) => 
			// 		(<h1 key={user.id}>{user.name}</h1>
			// 	))}		 
			// </div>
		 );
	}
}
 
export default CardList;