import React from 'react';
import Marketplace from './Marketplace';



const masterMarketplaceList = [
  {
    author: 'Haruki Murakami',
    title: 'Norwegian Wood',
    description: 'This stunning and elegiac novel propelled Haruki Murakami into the forefront of the literary scene.'
  },
  {
    author: 'Xiaolu Guo',
    title: 'I Am China',
    description: 'Rock \'n roll, revolution, and romance are seductively woven together in this intense and moving novel from the author of Twenty Fragments of a Ravenous Youth.'
  },
  {
    author: 'Lee Chang-Rae',
    title: 'On Such A Full Sea',
    description: 'A visionary work from one of the most important writers of our time, On Such a Full Sea takes Chang-rae Lee\'s elegance of prose mastery of storytelling, and insight into themes of identity, culture, work, and love, and lifts them to an exhilarating new plane.'
  }
];

function MarketplaceList(){
  return (
    <div>
      <hr/>
      {masterMarketplaceList.map((book, index) =>
        <Marketplace author={book.author}
          title={book.title}
          description={book.description}
          key={index}/>
      )}
    </div>
  );
}

export default MarketplaceList;