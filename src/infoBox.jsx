import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infobox({info}) {

  const hot_url = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const cold_url = "https://images.unsplash.com/photo-1542267207-f8127b454605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGQlMjB0ZW1wfGVufDB8fDB8fHww";
  const rain_url = "https://media.istockphoto.com/id/1737674905/photo/landscape-in-autumn-dark-clouds-and-golden-sun-over-agrultural-fields-near-g%C3%B6ttingen-germany.webp?b=1&s=170667a&w=0&k=20&c=fr0wcd8YHF_vo7O4ME9tkZO8jW85F-9iilxkYhE_Iz4=";
  
  const cold_icon = "";
  
  
  return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200, width: 350 }}
            image={info.temp > 25 ? hot_url : info.temp <= 15? cold_url : rain_url}
            title="Weather_image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h3> {info.city}-{info.weather} {info.temp > 25 ? <WbSunnyIcon style={{color : "yellow"}}/> : info.temp <= 15? <AcUnitIcon style={{color : "blue"}} /> : <ThunderstormIcon style={{color : "skyBlue"}} />}  </h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h3>Temprature : {info.temp} &deg;C</h3>
              <h3>Temp_min : {info.temp_min} &deg;C</h3> 
              <h3>Temp_max : {info.temp_max} &deg;C</h3>   
              <h3>Humidity : {info.humidity}</h3>  
              <h3> Feels_Like : {info.feels_like} &deg;C</h3>  
            </Typography>
          </CardContent>
        
        </Card>
      );
}