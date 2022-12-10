import { GlobalStyle } from "./styles/global";

import { Card } from "./components/Card";
import { NftImage } from "./components/NftImage";
import { NftInformation } from "./components/NftInformation";
import { NftTimePost } from "./components/NftTimePost";
import { NftAuthor } from "./components/NftAuthor";
import { NftName } from "./components/NftName";
import { NftDescription } from "./components/NftDescription";
import { NftPrice } from "./components/NftPrice";

import NftImageItem from "./images/image-equilibrium.jpg";
import authorProfilePicture from "./images/image-avatar.png";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Card>
        <NftImage imagePath={NftImageItem} />
        <NftName
          nftPath="https://www.github.com/cesarcanoff"
          nftName="Equilibrium"
          nftCode="3429"
        />
        <NftDescription content="Our Equilibrium collection promotes balance and calm."></NftDescription>
        <NftInformation>
          <NftPrice nftPrice="0.041"></NftPrice>
          <NftTimePost postTime="3 days left"></NftTimePost>
        </NftInformation>
        <NftAuthor
          authorImagePath={authorProfilePicture}
          authorName="Jules Wyvern"
        />
      </Card>
    </div>
  );
};

export default App;
