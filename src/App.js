import './App.css';
import { NewsBox } from './NewsBox';
import City from './newsPhotos/cityManFindsStars.jpg';
import cityStory from './newsStories/cityStars.js'
import Jumping from './newsPhotos/jumpingYouths.jpg'
import youthsStory from './newsStories/excitedYouths.js'
import Lost from './newsPhotos/lostInForest.jpg';
import lostStory from './newsStories/lost.js'
import Water from './newsPhotos/waterWet.jpg';
import waterStory from './newsStories/waterWet.js';

function App() {
  return (
    <div className="App">
      <NewsBox picture={City} blurb={cityStory} title="Man Sees Stars"/>
      <NewsBox picture={Jumping} blurb={youthsStory} title="Youth see Snow"/>
      <NewsBox picture={Lost} blurb={lostStory} title="Man Lost in Woods"/>
      <NewsBox picture={Water} blurb={waterStory} title="Water is Wet"/>

    </div>
  );
}




export default App;
